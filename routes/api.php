<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;

// Route::controller(AuthController::class)->group(function () {
//     Route::post('login', 'login');
//     Route::post('register', 'register');
//     Route::post('logout', 'logout');
//     Route::post('refresh', 'refresh');

// });

// Route::controller(TodoController::class)->group(function () {
//     Route::get('todos', 'index');
//     Route::post('todo', 'store');
//     Route::get('todo/{id}', 'show');
//     Route::put('todo/{id}', 'update');
//     Route::delete('todo/{id}', 'destroy');
// }); 

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);

Route::get('todos', [TodoController::class, 'index']);
Route::post('todo', [TodoController::class, 'store']);
Route::get('todo/{id}', [TodoController::class, 'show']);
Route::put('todo/{id}', [TodoController::class, 'update']);
Route::delete('todo/{id}', [TodoController::class, 'destroy']);

