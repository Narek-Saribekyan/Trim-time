<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barbershops', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable();
            $table->string('location', 255)->nullable();
            $table->string('contact', 30)->nullable();
            $table->string('logo', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('from_to', 255)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('barbershops');
    }
};
