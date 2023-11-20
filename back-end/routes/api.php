<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarbershopController;
use App\Http\Controllers\SearchController;

Route::get('/search', [SearchController::class, 'search']);

Route::get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource('barbershops', BarbershopController::class);

Route::get('/barbershops', [BarbershopController::class, 'all']);
Route::get('/barbershop/{id}', [BarbershopController::class, 'show']);

Route::post('/addBarbershop', [BarbershopController::class, 'addBarbershop']);
Route::post('/barbershop/{id}/barbers', [BarbershopController::class, 'addBarber']);
Route::post('/barbershop/{id}/services', [BarbershopController::class, 'addService']);

// Route::middleware(['cors'])->group(function () {});
// Route::middleware(['auth:sanctum'])->group(function () {});
