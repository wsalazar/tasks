<?php

namespace App\Http;



//use App\Http\Middleware\Authenticate;
//use App\Http\Middleware\Cors;
//use App\Http\Middleware\CrossDomain;
//use App\Http\Middleware\EncryptCookies;
//use App\Http\Middleware\ForceJsonResponse;
//use App\Http\Middleware\isAdmin;
//use App\Http\Middleware\isCompany;
//use App\Http\Middleware\RedirectIfAuthenticated;
//use App\Http\Middleware\TrimStrings;
//use App\Http\Middleware\TrustProxies;
//use App\Http\Middleware\VerifyCsrfToken;
//use Cog\Laravel\Ban\Http\Middleware\ForbidBannedUser;
//use Cog\Laravel\Ban\Http\Middleware\LogsOutBannedUser;
//use Fruitcake\Cors\HandleCors;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Auth\Middleware\AuthenticateWithBasicAuth;
use Illuminate\Auth\Middleware\Authorize;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull;
use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance;
use Illuminate\Foundation\Http\Middleware\TrimStrings;
use Illuminate\Foundation\Http\Middleware\ValidatePostSize;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Middleware\HandleCors;
use Illuminate\Http\Middleware\SetCacheHeaders;
use Illuminate\Http\Middleware\TrustProxies;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Routing\Middleware\ValidateSignature;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
//use RenatoMarinho\LaravelPageSpeed\Middleware\ElideAttributes;
//use RenatoMarinho\LaravelPageSpeed\Middleware\InlineCss;
//use RenatoMarinho\LaravelPageSpeed\Middleware\InsertDNSPrefetch;
//use RenatoMarinho\LaravelPageSpeed\Middleware\RemoveComments;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        TrustProxies::class,
        HandleCors::class,
        PreventRequestsDuringMaintenance::class,
        ValidatePostSize::class,
        TrimStrings::class,
        ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            EncryptCookies::class,
            AddQueuedCookiesToResponse::class,
            StartSession::class,
            ShareErrorsFromSession::class,
            VerifyCsrfToken::class,
            SubstituteBindings::class,
//            CrossDomain::class,

//            InlineCss::class,
//            ElideAttributes::class,
//            InsertDNSPrefetch::class,
//            RemoveComments::class,
            //CollapseWhitespace::class,
            //DeferJavascript::class,
        ],

        'api' => [
            'throttle:api',
            SubstituteBindings::class,
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => Authenticate::class,
        'auth.basic' => AuthenticateWithBasicAuth::class,
        'cache.headers' => SetCacheHeaders::class,
        'can' => Authorize::class,
        'guest' => RedirectIfAuthenticated::class,
        'password.confirm' => RequirePassword::class,
        'signed' => ValidateSignature::class,
        'throttle' => ThrottleRequests::class,
        'verified' => EnsureEmailIsVerified::class,
//        'forbid-banned-user' => ForbidBannedUser::class,
//        'logs-out-banned-user' => LogsOutBannedUser::class,
//        'is_admin' => isAdmin::class,
//        'is_company' => isCompany::class,
//        'json.response' => ForceJsonResponse::class,
//        'cors' => Cors::class,
    ];
}
