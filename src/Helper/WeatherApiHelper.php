<?php

namespace App\Helper;

use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class WeatherApiHelper
{
    private HttpClientInterface $scopedClient;

    public function __construct(HttpClientInterface $scopedClient)
    {
        $this->scopedClient = $scopedClient;
    }

    /**
     * @param string $weatherApiKey
     * @return string
     * @throws TransportExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * Returns all the data required, organised according to the different frontend components (e.g. "Current", "3 Day Outlook", "Hourly Forecast")
     */
    public function getCurrentAnd3DayForecastForAllCities(string $weatherApiKey): string
    {
        // Array of cities which, for scaling, could be formed by pulling cities from a DB
        $cities = ['London', 'New York', 'Paris'];

        $citiesForQuery = implode('|', $cities);

        $queryType = '/VisualCrossingWebServices/rest/services/timelinemulti';

        $weatherApiResponse = $this->scopedClient->request('GET', $queryType, [
            'query' => [
                'key' => $weatherApiKey,
                'locations' => $citiesForQuery,
                'datestart' => 'next3days',
                'include' => 'hours,current'
            ]
        ]);

        $rawData = json_decode($weatherApiResponse->getContent());

        return $this->organiseWeatherApiResponseForFrontendComponents($rawData, $cities);
    }

    /**
     * @param $rawData
     * @param $cities
     * @return false|string
     * Loops through the Weather API's response.
     * Extract the required data from each location and key it by the frontend component name.
     * e.g. to access the current forecast for "Paris": $weatherApiHelperResponse['currentWeather']['Paris']
     */
    private function organiseWeatherApiResponseForFrontendComponents($rawData, $cities)
    {
        $weatherApiHelperResponse = array();

        $weatherApiHelperResponse['cities'] = $cities;
        $weatherApiHelperResponse['currentWeather'] = array();
        $weatherApiHelperResponse['threeDayOutlook'] = array();
        $weatherApiHelperResponse['todayHourly'] = array();

        foreach($rawData->locations as $location) {
            $weatherApiHelperResponse['currentWeather'] = $this->currentWeatherData($location, $weatherApiHelperResponse['currentWeather']);
            $weatherApiHelperResponse['threeDayOutlook'] = $this->threeDayOutlookData($location, $weatherApiHelperResponse['threeDayOutlook']);
            $weatherApiHelperResponse['todayHourly'] = $this->todayHourlyData($location, $weatherApiHelperResponse['todayHourly']);
        }

        return json_encode($weatherApiHelperResponse);
    }

    /**
     * @param $location
     * @param $currentWeather
     * @return array
     * Extracts the "Current" forecast from a location.
     */
    private function currentWeatherData($location, $currentWeather): array
    {
        $currentWeather[$location->address] = array(
            'temp' => $this->fahrenheitToCelius($location->currentConditions->temp) . '°C',
            'rain' => $location->currentConditions->precip . 'mm',
            'windSpeed' => $location->currentConditions->windspeed . 'kph',
            'windDirection' => $this->windCardinal($location->currentConditions->winddir),
            'sunrise' => $location->currentConditions->sunrise,
            'sunset' => $location->currentConditions->sunset,
            'icon' => $location->currentConditions->icon,
        );

        return $currentWeather;
    }

    /**
     * @param $location
     * @param $threeDayOutlook
     * @return array
     * Extracts the "3 Day Outlook" from a location.
     */
    private function threeDayOutlookData($location, $threeDayOutlook): array
    {
        // Remove today's data as we do not include this in threeDayOutlook
        array_shift($location->days);

        foreach($location->days as $day){
            $threeDayOutlook[$location->address][] = array(
                // The below does not work for an unknown reason! I think the Weather API's datetimeEpoch may be a day behind for Paris...
                // 'date' => date('l\, jS F Y', $day->datetimeEpoch),
                'date' => date('l\, jS F Y', strtotime($day->datetime)),
                'tempMin' => $this->fahrenheitToCelius($day->tempmin) . '°C',
                'tempMax' => $this->fahrenheitToCelius($day->tempmax) . '°C',
                'icon' => $day->icon,
            );
        }

        return $threeDayOutlook;
    }

    /**
     * @param $location
     * @param $todayHourly
     * @return array
     * Extracts the "Hourly Forecast" from a location.
     */
    private function todayHourlyData($location, $todayHourly): array
    {
        $hours = $location->days[0]->hours;

        foreach ($hours as $hour) {
            $todayHourly[$location->address][] = array(
                'time' => date('H:i', $hour->datetimeEpoch),
                'temp' => $this->fahrenheitToCelius($hour->temp) . '°C',
                'icon' => $hour->icon,
            );
        }

        return $todayHourly;
    }


    /***********
     * Helpers *
     ***********/

    /**
     * @param $temp
     * @return float|int
     */
    function fahrenheitToCelius($temp): float|int
    {
        return floor(5/9*($temp-32));
    }

    /**
     * @param $deg
     * @return array|string
     */
    function windCardinal($deg): array|string
    {
        // Default to show wind direction in degrees
        $cardinal = $deg . '°C';

        $cardinalDirections = array(
            'N' => array(348.75, 360),
            'N2' => array(0, 11.25),
            'NNE' => array(11.25, 33.75),
            'NE' => array(33.75, 56.25),
            'ENE' => array(56.25, 78.75),
            'E' => array(78.75, 101.25),
            'ESE' => array(101.25, 123.75),
            'SE' => array(123.75, 146.25),
            'SSE' => array(146.25, 168.75),
            'S' => array(168.75, 191.25),
            'SSW' => array(191.25, 213.75),
            'SW' => array(213.75, 236.25),
            'WSW' => array(236.25, 258.75),
            'W' => array(258.75, 281.25),
            'WNW' => array(281.25, 303.75),
            'NW' => array(303.75, 326.25),
            'NNW' => array(326.25, 348.75)
        );
        foreach ($cardinalDirections as $dir => $angles) {
            if ($deg >= $angles[0] && $deg < $angles[1]) {
                $cardinal = str_replace("2", "", $dir);
            }
        }
        return $cardinal;
    }
}