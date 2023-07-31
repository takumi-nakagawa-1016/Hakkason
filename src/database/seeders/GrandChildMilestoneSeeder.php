<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GrandChildMilestoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('grandchild_milestones')->insert([
            [
                'id' => 1,
                'child_milestone_id' => 1,
                'name' => 'PHP技術者認定ウィザード合格',
                'description' => '３年以内にPHP資格の最上位取得を目指す。',
                'status' => 0,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 2,
                'child_milestone_id' => 1,
                'name' => 'Python3 エンジニア認定基礎試験合格',
                'description' => '1年以内にpythonの資格取得を目指す。',
                'status' => 0,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 3,
                'child_milestone_id' => 2,
                'name' => '実務レベルのReactを身につける',
                'description' => '２年以内にフロントエンジニアとも遜色ない技術力習得を目指す。',
                'status' => 0,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 4,
                'child_milestone_id' => 2,
                'name' => '実務レベルのFlutterを身につける',
                'description' => '4年以内に単独でアプリ開発が可能な技術力習得を目指す。',
                'status' => 0,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 5,
                'child_milestone_id' => 3,
                'name' => 'AWS　Professional取得',
                'description' => '4年以内に単独でアプリ開発が可能な技術力習得を目指す。',
                'status' => 0,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
        ]);
    }
}
