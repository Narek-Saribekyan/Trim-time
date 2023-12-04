<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarbershopController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\UserController;

// Public routes
Route::get('/search', [SearchController::class, 'search']);
Route::get('/barbershops', [BarbershopController::class, 'all']);
Route::get('/barbershop/{id}', [BarbershopController::class, 'show']);

// Barbershop-related routes
Route::post('/addBarbershop', [BarbershopController::class, 'addBarbershop']);
Route::post('/barbershop/{id}/barbers', [BarbershopController::class, 'addBarber']);
Route::post('/barbershop/{id}/services', [BarbershopController::class, 'addService']);

// User-related routes
Route::post('/loginUser', [UserController::class, 'loginUser']);
Route::post('/registerUser', [UserController::class, 'registerUser']);


//Route::get('/login', function () {
//    // Handle login logic or return a response
//})->name('login');
//
//Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');

// Authenticated routes (protected by Sanctum)
// You might want to move these routes inside a middleware group for Sanctum authentication
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user-info', [UserController::class, 'getUserInfo']);
    Route::post('/user-info', [UserController::class, 'getUserInfo']);
});
