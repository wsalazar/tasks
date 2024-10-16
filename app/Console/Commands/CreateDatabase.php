<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Input\InputArgument;

class CreateDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:create {name=tasks}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
//        $arguments = $this->getArguments();
        $this->fire();
    }

    public function fire()
    {
        $databaseName = env('DB_DATABASE', $this->argument('name'));
        $dbExists = DB::select("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '?';", [$databaseName]);
        if (count($dbExists) > 0) {
            $this->info('Database already exists');
            return;
        }
        $this->info('Creating database: ' . $databaseName);

        DB::connection()->statement('CREATE DATABASE ' . $databaseName);
//        DB::statement('CREATE DATABASE '.$databaseName);
    }

    protected function getArguments():array
    {
        return array(
            array('name', InputArgument::REQUIRED, 'Database name'),
        );
    }
}
