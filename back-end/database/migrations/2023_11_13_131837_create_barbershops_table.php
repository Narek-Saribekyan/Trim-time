<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('barbershops', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable();
            $table->string('login')->unique();
            $table->string('email')->unique();
            $table->string('contact', 30)->nullable();
            $table->string('password');
            $table->string('location', 255)->nullable();
            $table->string('logo', 255)->default('Default_logo/barbershop_default_logo.png');
            $table->string('from_to', 20)->nullable(); //11:00-22:00
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('barbershops');
    }
};
