<?php

namespace App\Http\Controllers\Api;

use App\Models\Film;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FilmRequest;

class FilmController extends Controller
{
    function index()
    {
        // Récupérer la liste des films
        $films = Film::all();

        // Retourner la liste des films
        return response()->json([
            "films" => $films,
            "message" => "Liste des films récupérée avec succès",
            "status" => 200
        ]);
    }

    function store(FilmRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Enregistrer le film
        $film = Film::create($validated);

        // Retourner une réponse JSON
        return response()->json([
            "film" => $film,
            "message" => "Film enregistré avec succès",
            "status" => 201
        ]);
    }
}
