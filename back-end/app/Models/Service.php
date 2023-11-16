<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['barber_id', 'name', 'price', 'longevity'];

//    public function barber()
//    {
//        return $this->belongsTo(Barber::class);
//    }
}
