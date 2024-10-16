<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    protected function boot()
    {
        Route::prefix('api')
             ->middleware('api')
            ->middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }
}
