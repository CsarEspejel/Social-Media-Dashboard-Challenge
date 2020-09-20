<?php

namespace App\Http\Controllers;

use App\socialData;
use Illuminate\Http\Request;

class SocialDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return socialData::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\socialData  $socialData
     * @return \Illuminate\Http\Response
     */
    public function show(socialData $socialData)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\socialData  $socialData
     * @return \Illuminate\Http\Response
     */
    public function edit(socialData $socialData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\socialData  $socialData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, socialData $socialData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\socialData  $socialData
     * @return \Illuminate\Http\Response
     */
    public function destroy(socialData $socialData)
    {
        //
    }
}
