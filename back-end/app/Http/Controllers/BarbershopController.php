<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Barbershop;
use App\Models\Barber;
use App\Models\Service;

class BarbershopController extends Controller
{
    public function all()
    {
        return Barbershop::all();
    }

    public function show($id)
    {
        $barbershop = Barbershop::findOrFail($id);
        $barbers = Barber::where('barbershop_id', $id)->get();

        // Collect all barber IDs
        $barberIds = $barbers->pluck('id');

        // Query services based on barber IDs
        $services = Service::whereIn('barber_id', $barberIds)->get();

        return response()->json(['barbershop' => $barbershop, 'barbers' => $barbers, 'services' => $services]);
    }

}
