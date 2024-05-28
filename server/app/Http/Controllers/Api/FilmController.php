<?php

namespace App\Http\Controllers\Api;

use App\Models\Film;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FilmController extends Controller
{
    function index()
    {
        // Récupérer la liste des films
        $films = Film::all();

        // Retourner la liste des films
        return response()->json([
            "films"=> $films,
            "status"=> 200,
            "message"=> "Liste des films récupérée avec succès"
        ]);
    }
}
