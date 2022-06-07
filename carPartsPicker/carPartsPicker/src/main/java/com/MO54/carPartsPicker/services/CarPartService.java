package com.MO54.carPartsPicker.services;

import java.util.List;

import com.MO54.carPartsPicker.model.CarPart;

public interface CarPartService {

    public List<CarPart> getAllCarParts();

    public CarPart getCarPartById(int id);

    public void addCarPart(CarPart carPart);

    public void deleteCarPart(int id);

}
