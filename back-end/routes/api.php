<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarbershopController;

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('barbershops', BarbershopController::class);

Route::get('/barbershop/{id}', [BarbershopController::class, 'show']);
Route::get('/barbershops', [BarbershopController::class, 'all']);

Route::get('/barbershop/{id}/services', [BarbershopController::class, 'getServices']);
Route::post('/barbershop/{id}/services', [BarbershopController::class, 'addService']);

Route::post('/barbershop/{id}/barbers', [BarbershopController::class, 'addBarber']);

// Route::middleware(['cors'])->group(function () {});
// Route::middleware(['auth:sanctum'])->group(function () {});
