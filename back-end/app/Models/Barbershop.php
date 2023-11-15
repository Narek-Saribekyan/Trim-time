<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barbershop extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'location', 'contact', 'logo', 'email', 'time'];

    public function barbers()
    {
        return $this->hasMany(Barber::class);
    }
}
