<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarbershopController;

// Apply HandleCors middleware to all routes
// Route::middleware(['cors'])->group(function () {

// No need to change this part, it remains within the 'handle.cors' middleware group
// Route::middleware(['auth:sanctum'])->group(function () {
Route::get('/user', function (Request $request) {
    return $request->user();
});

// Example Barbershop routes
Route::apiResource('barbershops', BarbershopController::class);
Route::get('/barbershop/{id}', [BarbershopController::class, 'show']); // Use the 'show' method for a single barbershop
Route::get('/barbershops', [BarbershopController::class, 'all']); // Use the 'all' method for all barbershops

Route::get('/barbershop/{id}/services', [BarbershopController::class, 'services']); // Get services for a specific barbershop
Route::post('/barbershop/{id}/services', [BarbershopController::class, 'addService']); // Add a service for a specific barbershop

// });

// If you want to add more routes without authentication, you can add them here
// For example:
Route::get('/example', function () {
    return response()->json(['message' => 'This is an example route without authentication']);
});
// });
