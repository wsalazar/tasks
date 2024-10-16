<?php

namespace App\Repositories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

class TaskRepository
{
    public function create(array|string|null $post)
    {
        Task::create([
            'task_name' => $post['task_name'],
            'task_duration' => $post['task_duration'],
            'task_address' => $post['task_address'],
            'point_of_contact' => $post['point_of_contact'],
            'contact_number' => $post['contact_number'],
        ]);
    }

    public function getAll(): Collection
    {
        return Task::all();
    }

    public function delete(Task $task): void
    {
        $task->delete();
    }

    public function fetch(int $taskId): Task
    {
        return Task::find($taskId);
    }

    public function update(array $all, Task $task): void
    {
        $task->update($all);
    }
}
