<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Helper\WeatherApiHelper;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class WeatherAppController extends AbstractController
{
    private WeatherApiHelper $weatherApiHelper;

    public function __construct(WeatherApiHelper $weatherApiHelper)
    {
        $this->weatherApiHelper = $weatherApiHelper;
    }

    /**
     * @return Response
     * @throws TransportExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * Hit by Preact App.
     * Returns all the data required, organised according to the different frontend components (e.g. "Current", "3 Day Outlook", "Hourly Forecast")
     */
    #[Route('/api/forecast')]
    public function getWeatherForecast(): Response
    {
        $weatherApiKey = $this->getParameter('weather_api_key');
        $data = $this->weatherApiHelper->getCurrentAnd3DayForecastForAllCities($weatherApiKey);

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($data);

        return $response;
    }
}