<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    /** @use HasFactory<\Database\Factories\CustomerFactory> */
    use HasFactory;

    protected $fillable = [ 
        'name',
        'address1',
        'address2',
        'city',
        'state',
        'zip',
        'phone',
        'email',
        'businessType',
        'prefMon',
        'prefTue',
        'prefWed',
        'prefThu',
        'prefFri',
    ];
}
