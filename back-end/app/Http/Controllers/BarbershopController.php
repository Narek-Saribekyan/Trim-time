<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Barbershop;
use App\Models\Barber; // Add this line to include the Barber model

class BarbershopController extends Controller
{
    public function all()
    {
        return Barbershop::all();
    }

    public function show($id)
    {
        $barbershop = Barbershop::findOrFail($id);
        $barbers = Barber::where('barbershop_id', $id)->get(); // Assuming 'barbers' table has a 'barbershop_id' column

        return response()->json(['barbershop' => $barbershop, 'barbers' => $barbers]);
    }
}
