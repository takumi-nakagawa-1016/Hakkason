<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\ChildMilestoneController;
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
Route::post('/child-milestone/store', [ChildMilestoneController::class, 'childStore']);
Route::patch('/child-milestone/{id}', [ChildMilestoneController::class, 'childUpdate']);
Route::delete('child-milestone/{id}', [ChildMilestoneController::class, 'childDelete']);
Route::get('child-milestone/list', [ChildMilestoneController::class, 'childList']);
