<template>
    <form>
        <div class="form-controll">
            <label for="firstname">Firstnmame</label>
            <input type="text" id="firstname">
        </div>
        <div class="form-controll">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname">
        </div>
        <div class="form-controll">
            <label for="description">Description</label>
            <textarea rows="5" id="description"></textarea>
        </div>
        <div class="form-controll">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate">
        </div>

        <div class="form-controll">
            <h3>Areas of Expertise</h3>
        </div>
        <div>
            <input type="checkbox" id="frontend" value="frontend">
            <label for="frontend">Frontend Developement</label>
        </div>
        <div>
            <input type="checkbox" id="backend" value="backend">
            <label for="backend">Backend Developement</label>
        </div>
        <div>
            <input type="checkbox" id="career" value="career">
            <label for="career">Career Advisory</label>
        </div>
        <base-button>Register</base-button>
    </form>
</template>