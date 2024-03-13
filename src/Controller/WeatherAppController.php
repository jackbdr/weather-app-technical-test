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

    #[Route('/api/forecast')]
    public function getWeatherForecast(): Response
    {
        $weatherApiKey = $this->getParameter('weather_api_key');
        $data = $this->weatherApiHelper->getCurrentAnd3DayForecastForAllCities($weatherApiKey);

        $json = json_decode($data);

//        echo "<pre>";
//        var_dump($json);
//        echo "</pre>";

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($data);

        return $response;
    }

}