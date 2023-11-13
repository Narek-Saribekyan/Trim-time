<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Barbershop;

class BarbershopController extends Controller
{
    public function index()
    {
        return Barbershop::all();
    }
}
