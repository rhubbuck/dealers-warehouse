<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Customer::all();
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $customerData = $request->validate([
            'name' => 'required|max:255',
            'address1' => 'required|max:255',
            'address2' => 'max:255',
            'city' => 'required|max:255',
            'state' => 'required|max:255',
            'zip' => 'required|numeric|digits:5',
            'phone' => 'required|numeric|digits:10',
            'email' => 'required|email',
            'businessType' => 'required|max:255',
            'prefMon' => 'required',
            'prefTue' => 'required',
            'prefWed' => 'required',
            'prefThu' => 'required',
            'prefFri' => 'required',
        ]);

        $customer = Customer::create($customerData);
        return $customer;
    }

    public function show(Customer $customer)
    {
        return $customer;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $customerData = $request->validate([
            'name' => 'required|max:255',
            'address1' => 'required|max:255',
            'address2' => 'max:255',
            'city' => 'required|max:255',
            'state' => 'required|max:255',
            'zip' => 'required|max:255',
            'phone' => 'required|max:255',
            'email' => 'required|max:255',
            'businessType' => 'required|max:255',
            'prefMon' => 'required',
            'prefTue' => 'required',
            'prefWed' => 'required',
            'prefThu' => 'required',
            'prefFri' => 'required',
        ]);

        $customer->update($customerData);
        return $customer;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();
        return response()->json([
            'success' => true,
            'message' => 'The customer was deleted',
            'status' => 200
        ]);
    }
}
