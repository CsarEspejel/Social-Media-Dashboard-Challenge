<?php

namespace App;

// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as MongoModel;

class socialData extends MongoModel
{
    protected $collection = "socialData";
    protected $primaryKey = "id";
}
