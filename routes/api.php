<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('task-list', [TaskController::class,'index'])->name('task.index');
Route::delete('delete-task/{id}', [TaskController::class,'delete'])->name('task.delete');
Route::post('task', [TaskController::class,'store'])->name('task.store');
Route::put('update-task/{id}', [TaskController::class,'update'])->name('task.update');
