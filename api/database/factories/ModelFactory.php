<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Clientes::class, function (Faker\Generator $faker) {

    return [
        'rif' => $faker->text(15),
        'razon_social' => $faker->text(50),
        'direccion' => $faker->text(100),
        'telefono' => $faker->text(15),
        'fax' => $faker->text(15),
        'email' => $faker->unique()->safeEmail
    ];
});

$factory->define(App\Instituciones::class, function (Faker\Generator $faker) {
    return [
        'numero' => $faker->integer,
        'tipo' => $faker->text(30),
        'ciudad' => $faker->text(30),
        'direccion' => $faker->text(100),
        'materia' => $faker->text(30),
        'juez' => $faker->text(50),
        'telefono' => $faker->text(15),
        'fax' => $faker->text(15),
        'logo' => $faker->text('50'),
        'email' => $faker->text('50')
    ];
});

$factory->define(App\Expedientes::class, function (Faker\Generator $faker) {
    return [
        'id_cliente' => $faker->integer,
        'num_expediente' => $faker->text(20),
        'id_institucion' => $faker->integer,
        'nombre_causa' => $faker->text(30),
        'descripcion' => $faker->text(50),
        'fecha_expediente' => $faker->text(15)
    ];
});