<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditTaskRequest;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Http\Resources\TaskSingleRecordResource;
use App\Models\Task;
use App\Repositories\TaskRepository;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response as HttpResponse;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class TaskController extends Controller
{
    public function __construct(protected TaskRepository $taskRepository)
    {

    }

    /**
     * Display a listing of the resource.
     */
    public function index(int $id): ResourceCollection
    {
        return TaskResource::collection($this->taskRepository->getUserTasks($id));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request): HttpResponse
    {
        $this->taskRepository->create($request->post());
        return response("Task was successfully created");
    }

    /**
     * Display the specified resource.
     */
    public function show(int $taskId): InertiaResponse
    {
        $taskResource = new TaskSingleRecordResource($this->taskRepository->fetch($taskId));
        return Inertia::render('Tasks', [
            'task' => $taskResource->jsonSerialize(),
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(EditTaskRequest $request, string $taskId)
    {
        $this->taskRepository->update($request->all(), Task::find($taskId));
        return response("Task was successfully updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(int $taskId): Response
    {
        $this->taskRepository->delete(Task::find($taskId));
        return response("Task was successfully updated");
    }
}
