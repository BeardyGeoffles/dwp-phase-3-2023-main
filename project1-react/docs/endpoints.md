**&larr; [Back to Project 1 README](../README.md)**
# REST API Reference Design

This sections provides a reference design for the RESTful API for the Estate Agent system. This is an unoptimized design and can be improved.

<!-- TOC -->
* [REST API Reference Design](#rest-api-reference-design)
  * [Schemas](#schemas)
  * [Register New Seller](#register-new-seller)
  * [Get All Sellers](#get-all-sellers)
  * [GetSeller By ID](#getseller-by-id)
  * [Register New Buyer](#register-new-buyer)
  * [Get All Buyers](#get-all-buyers)
  * [Get Buyer By ID](#get-buyer-by-id)
  * [Register New Property](#register-new-property)
  * [Get All Properties](#get-all-properties)
  * [Get Property By ID](#get-property-by-id)
  * [Update Property Details](#update-property-details)
  * [Make New Booking](#make-new-booking)
  * [Get All Booking](#get-all-booking)
  * [Delete Booking](#delete-booking)
<!-- TOC -->

---

## Schemas

<pre>
<b>SELLER</b> {
    id          number(integer)
    firstName   string
    surname     string
    address     string
    postcode    string
    phone       string
}

<b>BUYER</b> {
    id          number(integer)
    firstName   string
    surname     string
    address     string
    postcode    string
    phone       string
    properties  [ PROPERTY{...} ] // a list of properties borught by the buyer
    }

<b>PROPERTY</b> {
    id         number(integer) 
    address     string
    postcode    string
    type        string Enum: [ DETACHED, SEMI, APARTMENT ]
    bedrooms    number
    bathrooms   number
    garden      boolean
    price       number($float)
    status      string Enum: [ FORSALE, SOLD, WITHDRAWN ]
    seller      SELLER{...}
    buyer       BUYER{...}
}

<b>BOOKING</b> {
    id          number(integer)
    buyer       BUYER{...}
    property    PROPERTY{...}
    time        string($date-time)
}
</pre>
---

## Register New Seller

>**POST** /seller e.g. http://localhost:8080/seller
>
><b>Parameters:</b> no parameters

><b>Request Body</b> Content=application/json
<pre>
<b>SELLER{...}</b>

<b>Example</b>
{
    "firstName" : "Hugh",
    "surname" : "Mann",
    "address" : "this is a test address",
    "postcode" : "AB1 2CD",
    "phone" : "01234567890"
}
</pre>

<mark>Note</mark>: Seller ID is generate by the backend and returned in response

>**Response:** 200 OK
<pre>
{
    "id" : 1,
    "firstName" : "Hugh",
    "surname" : "Mann",
    "address" : "this is a test address",
    "postcode" : "AB1 2CD",
    "phone" : "01234567890"
}
</pre>

## Get All Sellers

>**GET** /seller e.g. http://localhost:8080/seller
>
>**Parameters:** no parameters

>**Response** 200 OK
<pre>
<b>[ SELLER{...} ]</b>

<b>Example</b>
[   
    {
        "id" : 1,
        "firstName" : "Hugh",
        "surname" : "Mann",
        "address" : "this is a test address",
        "postcode" : "AB1 2CD",
        "phone" : "01234567890"
    },
    {
        "id" : 2
        "firstName" : "Hugh",
        "surname" : "Mann",
        "address" : "this is a test address",
        "postcode" : "AB1 2CD",
        "phone" : "01234567890"
    }
]
</pre>


## GetSeller By ID

>**GET** /seller/{id} e.g http://localhost:8080/seller/2
>
>**Parameters:** id Seller ID

>**Response** 200 OK
<pre>
<b>SELLER{...}</b>

<b>Example</b>
{
    "id" : 2
    "firstName" : "Hugh",
    "surname" : "Mann",
    "address" : "this is a test address",
    "postcode" : "AB1 2CD",
    "phone" : "01234567890"
}
</pre>

## Register New Buyer

>**POST** /buyer e.g. http://localhost:8080/buyer</span>
>
>**Parameters:** no parameters

>**Request Body** Content=application/json
<pre>
<b>BUYER{...}</b>

<b>Example</b>
{
    "firstName": "Aaron",
    "surname": "Aaronson",
    "address": "this is a test address",
    "postcode": "AB1 2CD",
    "phone": "01234567890"
}
</pre>

<mark>Note</mark>: Buyer ID is generate by the backend and returned in response

>**Response** 200 OK
<pre>
<b>Example</b>
{
    "id" : 1,
    "firstName" : "Aaron",
    "surname" : "Aaronson",
    "address" : "this is a test address",
    "postcode" : "AB1 2CD",
    "phone" : "01234567890"
}
</pre>


## Get All Buyers

>**GET /buyer** e.g. http://localhost:8080/buyer</span>
> 
>**Parameters:** no parameters

>**Response** 200 OK
<pre>
<b>[ BUYER{...} ]</b>

<b>Example</b>
[   
    {
        "id" : 1,
        "firstName" : "Aaron",
        "surname" : "Aaronson",
        "address" : "this is a test address",
        "postcode" : "AB1 2CD",
        "phone" : "01234567890"
    },
    {
        "id" : 2
        "firstName" : "Hugh",
        "surname" : "Mann",
        "address" : "Another Address",
        "postcode" : "BB1 2CC",
        "phone" : "01234567890"
    }
]
</pre>

## Get Buyer By ID

>**GET /buyer{id}**  e.g. http://localhost:8080/buyer/2</span>
>
>**Parameters: id**  Buyer ID

>Response</b> 200 OK
<pre>
<b>BUYER{...}</b>

<b>Example</b>
{
    "id" : 2
    "firstName" : "Hugh",
    "surname" : "Mann",
    "address" : "Another Address",
    "postcode" : "BB1 2CC",
    "phone" : "01234567890"
}
</pre>

## Register New Property

>**POST /property** e.g. http://localhost:8080/property</span>
>
>**Parameters:** no parameters

>**Request Body** Content=application/json
 <pre>
<b>PROPERTY{...}</b>

<b>Example</b>
{
    "address" : "somewhere",
    "postcode" : "this is a postcode",
    "type" : "APARTMENT",
    "bedrooms" : 2,
    "bathrooms" : 1,
    "garden" : 0,
    "price" : 150000.40,
    "status" : "FORSALE",
    "seller" : {"id" : 1}
}
</pre>

<mark>Note</mark>: Property ID is generate by the backend and returned in response

>Response</b> 200 OK
<pre>
{
    "id" : 1,
    "address" : "somewhere",
    "postcode" : "this is a postcode",
    "type" : "APARTMENT",
    "bedrooms" : 2,
    "bathrooms" : 1,
    "garden" : 0,
    "price" : 150000.40,
    "status" : "FORSALE",
    "seller" : {"id" : 4}
}
</pre>


## Get All Properties

>**GET /property** e.g. http://localhost:8080/property</span>
> 
>**Parameters:** no parameters

>Response</b> 200 OK
<pre>
<b>[ PROPERTY{...} ]</b>

<b>Example</b>
[   
    {
        "id" : 1,
        "address" : "Somewhere CIty",
        "postcode" : "SO1 2ME",
        "type" : "APARTMENT",
        "bedrooms" : 2,
        "bathrooms" : 1,
        "garden" : 0,
        "price" : 150000,
        "status" : "FORSALE",
        "seller" : {"id" : 4}
    },
    {
        "id" : 2,
        "address" : "Here Street",
        "postcode" : "HE1 1ST",
        "type" : "DETACHED",
        "bedrooms" : 3,
        "bathrooms" : 2,
        "garden" : 0,
        "price" : 250000,
        "status" : "FORSALE",
        "seller" : {"id" : 23}
    }
]
</pre>


## Get Property By ID

>**GET /property{id}**  e.g. http://localhost:8080/property/2</span>
>
>**Parameters: id** Property ID

>Response</b> 200 OK
<pre>
<b>PROPERTY{...}</b>

<b>Example</b>
{
    "id" : 2,
    "address" : "Here Street",
    "postcode" : "HE1 1ST",
    "type" : "DETACHED",
    "bedrooms" : 3,
    "bathrooms" : 2,
    "garden" : 0,
    "price" : 250000,
    "status" : "FORSALE",
    "seller" : {"id" : 23}
}
</pre>

## Update Property Details

>PUT /property e.g. http://localhost:8080/property</span>
>
>**Parameters:** no parameters

>**Request Body** Content=application/json
 <pre>
<b>PROPERTY{...}</b>

<b>Example, update Property with ID 1 from FORSALE to WITHDRAWN</b>
{
    "id" : 1,
    "address" : "somewhere",
    "postcode" : "this is a postcode",
    "type" : "APARTMENT",
    "bedrooms" : 2,
    "bathrooms" : 1,
    "garden" : 0,
    "price" : 150000.40,
    "status" : "WITHDRAWN",
    "seller" : {"id" : 1}
}
</pre>

<mark>Note</mark>: All fields are required

>**Response:** 200 OK
<pre>
{
    "id" : 1,
    "address" : "somewhere",
    "postcode" : "this is a postcode",
    "type" : "APARTMENT",
    "bedrooms" : 2,
    "bathrooms" : 1,
    "garden" : 0,
    "price" : 150000.40,
    "status" : "WITHDRAWN",
    "seller" : {"id" : 4}
}
</pre>


## Make New Booking

>**POST /booking** e.g. http://localhost:8080/booking</span>

>**Parameters:** no parameters

>**Request Body** Content=application/json
 <pre>
<b>BOOKING{...}</b>

<b>Example</b>
{
    "buyer" : {"id" : 1},
    "property" : {"id" : 1},
    "time" : "2024-12-03T14:30:00Z"
}
</pre>

<mark>Note</mark>: Buyer ID is generate by the backend and returned in response

>Response</b> 200 OK
<pre>
<b>Example</b>
{
    "id" : 1,
    "buyer" : {"id" : 1},
    "property" : {"id" : 1},
    "time" : "2024-12-03T14:30:00Z"
}
</pre>

## Get All Booking

>**GET** **/booking** e.g. http://localhost:8080/booking</span>
>
>**Parameters:** no parameters

>**Response:** 200 OK
<pre>
<b>[ BOOKING{...} ]</b>

<b>Example</b>
[   
    {
        "id" : 1,
        "buyer" : {"id" : 1},
        "property" : {"id" : 1},
        "time" : "2024-12-03T14:30:00Z"
    },
    {
        "id" : 2,
        "buyer" : {"id" : 3},
        "property" : {"id" : 1},
        "time" : "2024-12-06T15:00:00Z"
    }
]
</pre>

## Delete Booking

>**DELETE** /booking{id} e.g. http://localhost:8080/booking/2</span>
>
>**Parameters:** _id_  Booking ID

>**Response** 200 OK
<pre>{}</pre>

