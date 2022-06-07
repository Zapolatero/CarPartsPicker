package com.MO54.carPartsPicker.services;

import java.util.List;

import com.MO54.carPartsPicker.model.CarPart;
import com.MO54.carPartsPicker.repository.CarPartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CarPartServiceImplementation implements CarPartService {

    @Autowired
    CarPartRepository carPartRepository;

    @Override
    public List<CarPart> getAllCarParts() {
        return (List<CarPart>) carPartRepository.findAll();
    }

    @Override
    public CarPart getCarPartById(int id) {
        return carPartRepository.findById(id).get();
    }

    @Override
    public void addCarPart(CarPart carPart) {
        carPartRepository.save(carPart);
    }

    @Override
    public void deleteCarPart(int id) {
        carPartRepository.deleteById(id);
    }

}
