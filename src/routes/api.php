<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\ChildMilestoneController;
use App\Http\Controllers\GrandchildMilestoneController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MilestoneController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/data', [ApiController::class, 'getData']);
    Route::post('/post', [ApiController::class, 'post']);

    // Milestone
    Route::post('/milestone/store', [MilestoneController::class, 'store']);
    Route::patch('/milestone/{id}', [MilestoneController::class, 'update']);
    Route::delete('/milestone/{id}', [MilestoneController::class, 'delete']);
    Route::get('milestone/index', [MilestoneController::class, 'index']);
    // ChildMilestone
    Route::post('/child-milestone/store', [ChildMilestoneController::class, 'storeChild']);
    Route::patch('/child-milestone/{id}', [ChildMilestoneController::class, 'updateChild']);
    Route::delete('/child-milestone/{id}', [ChildMilestoneController::class, 'deleteChild']);
    Route::patch('/child-milestone/status/{id}', [ChildMilestoneController::class, 'updateChildStatus']);
    Route::get('/child-milestone/{milestone_id}', [ChildMilestoneController::class, 'fetchChildMilestones']);

    // GrandChildMilestone
    Route::post('/grand-child-milestone/store', [GrandchildMilestoneController::class, 'storeGrandChild']);
    Route::patch('/grand-child-milestone/{id}', [GrandchildMilestoneController::class, 'updateGrandChild']);
    Route::delete('/grand-child-milestone/{id}', [GrandchildMilestoneController::class, 'deleteGrandChild']);
    Route::get('/grant-child-milestone/relational-child', [GrandchildMilestoneController::class, 'fetchGrandChildOfChild']);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

