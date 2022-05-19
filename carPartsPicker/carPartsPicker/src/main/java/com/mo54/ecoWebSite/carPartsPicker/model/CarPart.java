package com.mo54.ecoWebSite.carPartsPicker.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.mo54.ecoWebSite.carPartsPicker.CarPartsPickerApplication;

import org.hibernate.annotations.CollectionId;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "carpart")
public class CarPart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String name;

    @Column
    private float price;

    @Column
    private float weight;

    @Column
    private String imageUrl;

    public CarPart() {

    }

    public CarPart(String name, float price, float weight, String imageUrl) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.imageUrl = imageUrl;
    }

    public CarPart(int id, String name, float price, float weight, String imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.imageUrl = imageUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
