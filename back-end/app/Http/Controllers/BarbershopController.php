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

        $barbers = $barbershop->barbers()->get();
        $services = Service::whereIn('barber_id', $barbers->pluck('id'))->get();

        return response()->json(['barbershop' => $barbershop, 'barbers' => $barbers, 'services' => $services]);
    }

    public function getServices($id)
    {
        $barbershop = Barbershop::findOrFail($id);
        $barbers = $barbershop->barbers()->get();
        $services = Service::whereIn('barber_id', $barbers->pluck('id'))->get();

        return response()->json(['services' => $services]);
    }

    public function addBarber(Request $request, $id)
    {
        $barbershop = Barbershop::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'from-to' => 'required|string',
        ]);

        $avatar = $request->input('avatar', 'public/Default_logo/barbershop_default_logo.png');

        $barber = $barbershop->barbers()->create([
            'name' => $request->input('name'),
            'from_to' => $request->input('from_to'),
            'avatar' => $avatar,
        ]);

        return response()->json(['message' => 'Barber added successfully', 'barber' => $barber]);
    }

    public function addService(Request $request, $id)
    {
        $barbershop = Barbershop::findOrFail($id);

        $request->validate([
            'barber_id' => 'required|int',
            'name' => 'required|string',
            'price' => 'required|numeric',
            'longevity' => 'required|string',
        ]);

        $service = $barbershop->services()->create([
            'barber_id' => $request->input('barber_id'),
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'longevity' => $request->input('longevity'),
        ]);

        return response()->json(['message' => 'Service added successfully', 'service' => $service]);
    }
}
