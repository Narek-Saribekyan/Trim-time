<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function all()
    {
        $bookings = Booking::with(['service', 'booker'])->get();
        return response()->json(['bookings' => $bookings]);
    }

    public function show($id)
    {
        $booking = Booking::with(['service', 'booker'])->find($id);

        if ($booking) {
            return response()->json(['booking' => $booking]);
        } else {
            return response()->json(['message' => 'Booking not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'service_id' => 'required|exists:services,id',
            'booker_id' => 'required|exists:bookers,id',
            'date' => 'required|date',
            'status' => 'required|string',
        ]);

        $booking = Booking::create([
            'service_id' => $request->input('service_id'),
            'booker_id' => $request->input('booker_id'),
            'date' => $request->input('date'),
            'status' => $request->input('status'),
        ]);

        return response()->json(['message' => 'Booking created successfully', 'booking' => $booking]);
    }

    public function destroy($id)
    {
        $booking = Booking::find($id);

        if ($booking) {
            $booking->delete();
            return response()->json(['message' => 'Booking deleted successfully']);
        } else {
            return response()->json(['message' => 'Booking not found'], 404);
        }
    }
}
