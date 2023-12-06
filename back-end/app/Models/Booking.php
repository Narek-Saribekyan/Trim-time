<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = ['service_id', 'booker_id', 'date', 'status'];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function booker()
    {
        return $this->belongsTo(Booker::class);
    }
}
