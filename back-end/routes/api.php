<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarbershopController;

// Apply HandleCors middleware to all routes
//Route::middleware(['cors'])->group(function () {

    // No need to change this part, it remains within the 'handle.cors' middleware group
//    Route::middleware(['auth:sanctum'])->group(function () {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });

        // Example Barbershop routes
        Route::apiResource('barbershops', BarbershopController::class);
//    });

    // If you want to add more routes without authentication, you can add them here
    // For example:
    Route::get('/example', function () {
        return response()->json(['message' => 'This is an example route without authentication']);
    });
//});
