<?php

namespace App\Helper;

use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
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
     * @throws TransportExceptionInterface
     */
    public function getCurrentAnd3DayForecastForAllCities(string $weatherApiKey): string
    {
        // Array of cities which, for scaling, could be formed by pulling cities from a DB
        $cities = ['London', 'Paris', 'New York'];

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

//        $statusCode = $weatherApiResponse->getStatusCode();
//        $contentType = $weatherApiResponse->getHeaders()['content-type'][0];

        return $weatherApiResponse->getContent();
    }

}