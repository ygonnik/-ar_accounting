<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;

use App\Http\Requests\Record\AddRequest;
class RecordsController extends Controller
{
    public function readRecords() {
        dd(Record::all());
    }

    public function addRecord(AddRequest $request) {
        $data = $request->validated();
        Record::create($data);
    }
}
