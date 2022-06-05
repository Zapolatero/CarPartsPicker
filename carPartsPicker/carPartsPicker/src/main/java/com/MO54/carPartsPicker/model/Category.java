package com.MO54.carPartsPicker.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "category")
@Inheritance(strategy = InheritanceType.JOINED)
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private int id;

    @Column
    private String name;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private Set<CarPart> carParts = new HashSet<>();

    public Category() {
    }

    public Category(int id, String name, Set<CarPart> carParts) {
        this.id = id;
        this.name = name;
        this.carParts = carParts;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<CarPart> getCarParts() {
        return carParts;
    }

    public void setCarParts(Set<CarPart> carParts) {
        this.carParts = carParts;
    }

}
