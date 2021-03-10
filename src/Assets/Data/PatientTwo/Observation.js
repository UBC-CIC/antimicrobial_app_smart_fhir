const Observation2 = {
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": [
        [
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5437-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5437-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5437-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5503-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5503-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5503-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5430-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5430-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: temperature = 36.83333 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5430-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.83333,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5481-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5481-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: bmi = 30.3 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5481-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.3,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2323-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2323-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: BUN SerPl-mCnc = 18 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2323-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3094-0",
                                "display": "BUN SerPl-mCnc"
                            }
                        ],
                        "text": "BUN SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 18,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 9,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 20,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2293-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2293-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: Albumin/Creat Ur-mRto = 5 ug/mg{creat}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2293-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9318-7",
                                "display": "Albumin/Creat Ur-mRto"
                            }
                        ],
                        "text": "Albumin/Creat Ur-mRto"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 5,
                        "unit": "ug/mg{creat}",
                        "system": "http://unitsofmeasure.org",
                        "code": "ug/mg{creat}"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "ug/mg{creat}",
                                "system": "http://unitsofmeasure.org",
                                "code": "ug/mg{creat}"
                            },
                            "high": {
                                "value": 29,
                                "unit": "ug/mg{creat}",
                                "system": "http://unitsofmeasure.org",
                                "code": "ug/mg{creat}"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5417-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5417-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: weight = 107.45603 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5417-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 107.45603,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5476-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5476-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: height = 186.944 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5476-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.944,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5395-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5395-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5395-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2300-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2300-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-11-13: Glucose Bld-mCnc = 272 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2300-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2339-0",
                                "display": "Glucose Bld-mCnc"
                            }
                        ],
                        "text": "Glucose Bld-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-11-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 272,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 70,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 109,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5469-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5469-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: height = 186.944 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5469-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.944,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2289-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2289-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: Sodium SerPl-sCnc = 140 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2289-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2951-2",
                                "display": "Sodium SerPl-sCnc"
                            }
                        ],
                        "text": "Sodium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 140,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 135,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 145,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2319-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2319-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: LDLc SerPl Calc-mCnc = 145 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2319-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "13457-7",
                                "display": "LDLc SerPl Calc-mCnc"
                            }
                        ],
                        "text": "LDLc SerPl Calc-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 145,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 100,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5488-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5488-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: bmi = 31.6 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5488-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 31.6,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5400-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5400-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: heart_rate = 60.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5400-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 60,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5396-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5396-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: weight = 104.50768 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5396-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 104.50768,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5450-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5450-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5450-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5424-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5424-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: weight = 111.81052 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5424-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 111.81052,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2307-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2307-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Chloride SerPl-sCnc = 100 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2307-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2075-0",
                                "display": "Chloride SerPl-sCnc"
                            }
                        ],
                        "text": "Chloride SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 95,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 105,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-1869612-gestage",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-1869612-gestage",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">1950-07-31: Gestational age at birth = 35.5 weeks</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-1869612-gestage"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "exam",
                                    "display": "Exam"
                                }
                            ],
                            "text": "Exam"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "18185-9",
                                "display": "Gestational age at birth"
                            }
                        ],
                        "text": "Gestational age at birth"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "1950-07-31",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 35.5,
                        "unit": "weeks",
                        "system": "http://unitsofmeasure.org",
                        "code": "wk"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5412-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5412-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5412-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2304-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2304-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Calcium SerPl-mCnc = 9.5 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2304-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "17861-6",
                                "display": "Calcium SerPl-mCnc"
                            }
                        ],
                        "text": "Calcium SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 9.5,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 8.5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 10.5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5501-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5501-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: weight = 109.90543 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5501-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 109.90543,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5480-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5480-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: weight = 106.00454 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5480-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 106.00454,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5498-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5498-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: heart_rate = 68.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5498-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 68,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2315-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2315-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Glucose Bld-mCnc = 237 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2315-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2339-0",
                                "display": "Glucose Bld-mCnc"
                            }
                        ],
                        "text": "Glucose Bld-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 237,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 65,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 110,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5418-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5418-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: bmi = 31.0 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5418-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 31,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5499-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5499-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: respiratory_rate = 21.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5499-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 21,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2296-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2296-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-07-31: Sodium SerPl-sCnc = 140 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2296-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2951-2",
                                "display": "Sodium SerPl-sCnc"
                            }
                        ],
                        "text": "Sodium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-07-31",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 140,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 135,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 145,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5478-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5478-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5478-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5426-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5426-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5426-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-544",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-544",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: Blood pressure 130/80 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 130,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 80,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5416-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5416-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: temperature = 36.83333 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5416-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.83333,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-543",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-543",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: Blood pressure 127/78 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 127,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 78,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5458-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5458-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5458-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-542",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-542",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: Blood pressure 138/85 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 138,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 85,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-541",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-541",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: Blood pressure 101/61 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 101,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 61,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5386-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5386-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: heart_rate = 76.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5386-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 76,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5485-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5485-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: respiratory_rate = 20.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5485-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-548",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-548",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: Blood pressure 120/73 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 120,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 73,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-547",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-547",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: Blood pressure 116/70 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 116,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 70,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5433-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5433-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5433-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-546",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-546",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: Blood pressure 107/64 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 107,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 64,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-545",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-545",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: Blood pressure 140/85 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 140,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 85,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5446-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5446-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: bmi = 30.9 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5446-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.9,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5411-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5411-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: bmi = 30.5 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5411-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.5,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-549",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-549",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: Blood pressure 88/52 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 88,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 52,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5392-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5392-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: height = 185.674 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5392-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 185.674,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2308-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2308-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Creat SerPl-mCnc = 1 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2308-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2160-0",
                                "display": "Creat SerPl-mCnc"
                            }
                        ],
                        "text": "Creat SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 1,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.8,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 1.4,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5413-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5413-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: height = 186.436 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5413-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.436,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5468-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5468-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5468-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5493-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5493-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5493-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5451-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5451-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: temperature = 36.94444 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5451-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.94444,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2294-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2294-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: Testost SerPl-mCnc = 355 ng/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2294-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2986-8",
                                "display": "Testost SerPl-mCnc"
                            }
                        ],
                        "text": "Testost SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 355,
                        "unit": "ng/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "ng/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 300,
                                "unit": "ng/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/dL"
                            },
                            "high": {
                                "value": 1000,
                                "unit": "ng/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5463-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5463-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: heart_rate = 52.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5463-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 52,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5473-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5473-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: weight = 106.36741 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5473-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 106.36741,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2318-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2318-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: HDLc SerPl-mCnc = 38 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2318-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2085-9",
                                "display": "HDLc SerPl-mCnc"
                            }
                        ],
                        "text": "HDLc SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 38,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 40,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 60,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-551",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-551",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: Blood pressure 112/67 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 112,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 67,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-550",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-550",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: Blood pressure 85/50 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 85,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 50,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5490-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5490-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: height = 186.944 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5490-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.944,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5474-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5474-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: bmi = 30.5 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5474-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.5,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-537",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-537",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: Blood pressure 110/73 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 110,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 73,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5449-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5449-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: heart_rate = 70.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5449-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 70,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-539",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-539",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: Blood pressure 101/62 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 101,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 62,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5470-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5470-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: heart_rate = 50.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5470-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 50,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-538",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-538",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: Blood pressure 122/76 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 122,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 76,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5442-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5442-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: heart_rate = 64.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5442-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 64,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2288-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2288-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: Potassium SerPl-sCnc = 3.6 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2288-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2823-3",
                                "display": "Potassium SerPl-sCnc"
                            }
                        ],
                        "text": "Potassium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 3.6,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 3.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 5.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5482-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5482-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5482-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5393-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5393-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: heart_rate = 62.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5393-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 62,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5431-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5431-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: weight = 104.68912 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5431-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 104.68912,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-540",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-540",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: Blood pressure 97/60 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 97,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 60,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5477-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5477-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: heart_rate = 67.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5477-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 67,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2303-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2303-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: CO2 SerPl-sCnc = 27 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2303-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2028-9",
                                "display": "CO2 SerPl-sCnc"
                            }
                        ],
                        "text": "CO2 SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 27,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 22,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 29,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5435-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5435-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: heart_rate = 85.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5435-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 85,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5500-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5500-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5500-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2299-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2299-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-07-31: PSA SerPl-mCnc = 0.31 ng/mL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2299-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2857-1",
                                "display": "PSA SerPl-mCnc"
                            }
                        ],
                        "text": "PSA SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-07-31",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.31,
                        "unit": "ng/mL",
                        "system": "http://unitsofmeasure.org",
                        "code": "ng/mL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "ng/mL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/mL"
                            },
                            "high": {
                                "value": 4,
                                "unit": "ng/mL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/mL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5484-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5484-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: heart_rate = 67.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5484-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 67,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5425-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5425-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: bmi = 32.0 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5425-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 32,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5441-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5441-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: height = 186.69 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5441-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.69,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2290-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2290-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: Creat SerPl-mCnc = 0.9 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2290-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2160-0",
                                "display": "Creat SerPl-mCnc"
                            }
                        ],
                        "text": "Creat SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.8,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 1.4,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-554",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-554",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: Blood pressure 114/68 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 114,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 68,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-553",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-553",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: Blood pressure 136/82 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 136,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 82,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-552",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-552",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: Blood pressure 113/67 mmHg</div>"
                    },
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "55284-4",
                                "display": "Blood pressure"
                            }
                        ],
                        "text": "Blood pressure"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "component": [
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8480-6",
                                        "display": "Systolic blood pressure"
                                    }
                                ],
                                "text": "Systolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 113,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        },
                        {
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://loinc.org",
                                        "code": "8462-4",
                                        "display": "Diastolic blood pressure"
                                    }
                                ],
                                "text": "Diastolic blood pressure"
                            },
                            "valueQuantity": {
                                "value": 67,
                                "unit": "mmHg",
                                "system": "http://unitsofmeasure.org",
                                "code": "mm[Hg]"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5388-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5388-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5388-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5491-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5491-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: heart_rate = 82.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5491-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 82,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2314-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2314-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Calcium SerPl-mCnc = 9.3 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2314-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "17861-6",
                                "display": "Calcium SerPl-mCnc"
                            }
                        ],
                        "text": "Calcium SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 9.3,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 8.5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 10.5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5445-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5445-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: weight = 107.95498 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5445-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 107.95498,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5387-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5387-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: respiratory_rate = 20.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5387-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5427-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5427-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: height = 186.944 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5427-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.944,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5443-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5443-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5443-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5428-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5428-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: heart_rate = 80.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5428-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 80,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5422-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5422-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: respiratory_rate = 19.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5422-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 19,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5456-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5456-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: heart_rate = 73.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5456-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 73,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5447-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5447-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5447-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5486-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5486-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5486-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5423-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5423-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: temperature = 36.83333 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5423-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.83333,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5444-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5444-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-03: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5444-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5465-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5465-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5465-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5401-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5401-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: respiratory_rate = 21.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5401-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 21,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5402-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5402-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5402-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5453-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5453-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: bmi = 31.0 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5453-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 31,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2320-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2320-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Cholest SerPl-mCnc = 195 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2320-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2093-3",
                                "display": "Cholest SerPl-mCnc"
                            }
                        ],
                        "text": "Cholest SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 195,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 200,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5379-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5379-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: heart_rate = 73.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5379-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 73,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5378-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5378-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: height = 185.42 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5378-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 185.42,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5414-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5414-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: heart_rate = 85.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5414-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 85,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5479-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5479-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-24: temperature = 36.94444 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5479-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.94444,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5475-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5475-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5475-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5404-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5404-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: bmi = 30.4 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5404-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.4,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2295-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2295-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-07-31: Creat SerPl-mCnc = 1 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2295-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2160-0",
                                "display": "Creat SerPl-mCnc"
                            }
                        ],
                        "text": "Creat SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-07-31",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 1,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.8,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 1.4,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5439-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5439-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: bmi = 29.9 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5439-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 29.9,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2317-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2317-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: HCV Ab Ser Ql EIA = Reactive </div>"
                    },
                    "extension": [
                        {
                            "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/labs#value-range",
                            "valueString": "Reactive"
                        }
                    ],
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2317-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "13955-0",
                                "display": "HCV Ab Ser Ql EIA"
                            }
                        ],
                        "text": "HCV Ab Ser Ql EIA"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueString": "Reactive"
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5472-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5472-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5472-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2309-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2309-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: HCV Ab Ser Ql EIA = Reactive </div>"
                    },
                    "extension": [
                        {
                            "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/labs#value-range",
                            "valueString": "Reactive"
                        }
                    ],
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2309-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "13955-0",
                                "display": "HCV Ab Ser Ql EIA"
                            }
                        ],
                        "text": "HCV Ab Ser Ql EIA"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueString": "Reactive"
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5398-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5398-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5398-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5494-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5494-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: weight = 105.5963 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5494-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 105.5963,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5434-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5434-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: height = 187.452 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5434-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 187.452,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5492-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5492-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: respiratory_rate = 20.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5492-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5436-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5436-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5436-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5464-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5464-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5464-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5408-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5408-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: respiratory_rate = 19.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5408-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 19,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2313-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2313-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Albumin SerPl-mCnc = 4.2 g/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2313-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1751-7",
                                "display": "Albumin SerPl-mCnc"
                            }
                        ],
                        "text": "Albumin SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 4.2,
                        "unit": "g/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "g/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 3.2,
                                "unit": "g/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/dL"
                            },
                            "high": {
                                "value": 4.8,
                                "unit": "g/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5459-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5459-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: weight = 107.81891 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5459-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 107.81891,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5432-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5432-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: bmi = 29.9 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5432-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 29.9,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5440-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5440-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5440-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5407-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5407-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: heart_rate = 61.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5407-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 61,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2302-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2302-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: BUN SerPl-mCnc = 11 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2302-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3094-0",
                                "display": "BUN SerPl-mCnc"
                            }
                        ],
                        "text": "BUN SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 11,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 20,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5467-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5467-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: bmi = 29.9 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5467-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 29.9,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5496-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5496-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5496-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2291-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2291-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: PSA SerPl-mCnc = 0.31 ng/mL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2291-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2857-1",
                                "display": "PSA SerPl-mCnc"
                            }
                        ],
                        "text": "PSA SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.31,
                        "unit": "ng/mL",
                        "system": "http://unitsofmeasure.org",
                        "code": "ng/mL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "ng/mL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/mL"
                            },
                            "high": {
                                "value": 4,
                                "unit": "ng/mL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/mL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5397-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5397-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: bmi = 30.3 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5397-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.3,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2310-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2310-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Glucose SerPl-mCnc = 167 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2310-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2345-7",
                                "display": "Glucose SerPl-mCnc"
                            }
                        ],
                        "text": "Glucose SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 167,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 70,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 109,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5466-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5466-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: weight = 105.32415 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5466-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 105.32415,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5380-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5380-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: respiratory_rate = 20.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5380-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5460-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5460-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: bmi = 30.9 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5460-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.9,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5384-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5384-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5384-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5454-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5454-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5454-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5487-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5487-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: weight = 109.67864 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5487-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 109.67864,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5455-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5455-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: height = 186.944 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5455-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.944,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5462-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5462-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-11: height = 187.706 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5462-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 187.706,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2298-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2298-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-07-31: BUN SerPl-mCnc = 11 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2298-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3094-0",
                                "display": "BUN SerPl-mCnc"
                            }
                        ],
                        "text": "BUN SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-07-31",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 11,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 20,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5421-heartrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5421-heartrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: heart_rate = 78.0 {beats}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5421-heartrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "heart_rate"
                            }
                        ],
                        "text": "heart_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 78,
                        "unit": "{beats}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{beats}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5495-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5495-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-13: bmi = 30.2 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5495-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-13",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.2,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5403-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5403-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: weight = 104.14481 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5403-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 104.14481,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2321-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2321-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Trigl SerPl-mCnc = 105 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2321-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2571-8",
                                "display": "Trigl SerPl-mCnc"
                            }
                        ],
                        "text": "Trigl SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 105,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 150,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5390-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5390-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: bmi = 30.9 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5390-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.9,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5410-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5410-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: weight = 105.95918 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5410-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 105.95918,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5382-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5382-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: weight = 105.18807 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5382-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 105.18807,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2316-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2316-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Glucose Bld-mCnc = 237 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2316-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2339-0",
                                "display": "Glucose Bld-mCnc"
                            }
                        ],
                        "text": "Glucose Bld-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 237,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5399-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5399-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: height = 185.166 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5399-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 185.166,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5383-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5383-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: bmi = 30.6 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5383-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30.6,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5429-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5429-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-12: respiratory_rate = 19.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5429-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-12",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 19,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5457-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5457-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5457-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5448-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5448-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: height = 187.198 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5448-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 187.198,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5415-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5415-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: respiratory_rate = 19.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5415-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 19,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5483-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5483-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: height = 186.436 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5483-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.436,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5394-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5394-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-11-24: respiratory_rate = 20.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5394-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-11-24",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5419-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5419-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-15: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5419-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5471-respiratoryrate",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5471-respiratoryrate",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-19: respiratory_rate = 22.0 {breaths}/min</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5471-respiratoryrate"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9279-1",
                                "display": "respiratory_rate"
                            }
                        ],
                        "text": "respiratory_rate"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 22,
                        "unit": "{breaths}/min",
                        "system": "http://unitsofmeasure.org",
                        "code": "{breaths}/min"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2306-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2306-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Sodium SerPl-sCnc = 136 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2306-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2951-2",
                                "display": "Sodium SerPl-sCnc"
                            }
                        ],
                        "text": "Sodium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 136,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 135,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 145,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5406-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5406-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: height = 186.436 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5406-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.436,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5461-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5461-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-10: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5461-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2312-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2312-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Prot SerPl-mCnc = 7.7 g/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2312-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2885-2",
                                "display": "Prot SerPl-mCnc"
                            }
                        ],
                        "text": "Prot SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 7.7,
                        "unit": "g/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "g/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 5.7,
                                "unit": "g/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/dL"
                            },
                            "high": {
                                "value": 8.2,
                                "unit": "g/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5381-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5381-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-09-29: temperature = 36.88889 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5381-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-09-29",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.88889,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5389-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5389-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: weight = 106.45813 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5389-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 106.45813,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2292-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2292-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2004-08-23: BUN SerPl-mCnc = 13 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2292-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3094-0",
                                "display": "BUN SerPl-mCnc"
                            }
                        ],
                        "text": "BUN SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2004-08-23",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 13,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 20,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5385-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5385-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: height = 185.674 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5385-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 185.674,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5489-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5489-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-11: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5489-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2311-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2311-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: ALP SerPl-cCnc = 101 U/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2311-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "6768-6",
                                "display": "ALP SerPl-cCnc"
                            }
                        ],
                        "text": "ALP SerPl-cCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 101,
                        "unit": "U/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "U/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 45,
                                "unit": "U/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "U/L"
                            },
                            "high": {
                                "value": 129,
                                "unit": "U/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "U/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5420-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5420-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-12-08: height = 186.944 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5420-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-12-08",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.944,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5409-temperature",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5409-temperature",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-02-10: temperature = 36.83333 Cel</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5409-temperature"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8310-5",
                                "display": "temperature"
                            }
                        ],
                        "text": "temperature"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-02-10",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36.83333,
                        "unit": "Cel",
                        "system": "http://unitsofmeasure.org",
                        "code": "Cel"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2301-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2301-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Anion Gap3 SerPl-sCnc = 9 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2301-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "10466-1",
                                "display": "Anion Gap3 SerPl-sCnc"
                            }
                        ],
                        "text": "Anion Gap3 SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 9,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 0,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2305-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2305-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: Potassium SerPl-sCnc = 3.4 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2305-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2823-3",
                                "display": "Potassium SerPl-sCnc"
                            }
                        ],
                        "text": "Potassium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 3.4,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 3.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 5.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5452-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5452-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-10-05: weight = 108.59001 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5452-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-10-05",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 108.59001,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2322-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2322-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Glucose SerPl-mCnc = 220 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2322-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2345-7",
                                "display": "Glucose SerPl-mCnc"
                            }
                        ],
                        "text": "Glucose SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 220,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 75,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 110,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5502-bmi",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5502-bmi",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: bmi = 31.6 kg/m2</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5502-bmi"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "39156-5",
                                "display": "bmi"
                            }
                        ],
                        "text": "bmi"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 31.6,
                        "unit": "kg/m2",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg/m2"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5391-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5391-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2000-10-03: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5391-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2000-10-03",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5497-height",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5497-height",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-07-16: height = 186.436 cm</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5497-height"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8302-2",
                                "display": "height"
                            }
                        ],
                        "text": "height"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-07-16",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 186.436,
                        "unit": "cm",
                        "system": "http://unitsofmeasure.org",
                        "code": "cm"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2297-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2297-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2005-07-31: Potassium SerPl-sCnc = 3.5 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2297-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2823-3",
                                "display": "Potassium SerPl-sCnc"
                            }
                        ],
                        "text": "Potassium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2005-07-31",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 3.5,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 3.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 5.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5405-oxygensaturation",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5405-oxygensaturation",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2001-03-19: oxygen_saturation = 100.0 %{HemoglobinSaturation}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5405-oxygensaturation"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2710-2",
                                "display": "oxygen_saturation"
                            }
                        ],
                        "text": "oxygen_saturation"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2001-03-19",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 100,
                        "unit": "%{HemoglobinSaturation}",
                        "system": "http://unitsofmeasure.org",
                        "code": "%{HemoglobinSaturation}"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-5438-weight",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-5438-weight",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:02.000+00:00",
                        "source": "#FzxjXHQsZobUYPiY"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2006-01-06: weight = 105.32415 kg</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-5438-weight"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3141-9",
                                "display": "weight"
                            }
                        ],
                        "text": "weight"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2006-01-06",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 105.32415,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2341-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2341-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Trigl SerPl-mCnc = 78 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2341-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2571-8",
                                "display": "Trigl SerPl-mCnc"
                            }
                        ],
                        "text": "Trigl SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 78,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 150,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2325-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2325-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Potassium SerPl-sCnc = 4.1 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2325-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2823-3",
                                "display": "Potassium SerPl-sCnc"
                            }
                        ],
                        "text": "Potassium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 4.1,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 3.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 5.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2331-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2331-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Creat SerPl-mCnc = 0.9 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2331-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2160-0",
                                "display": "Creat SerPl-mCnc"
                            }
                        ],
                        "text": "Creat SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.7,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 1.3,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2343-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2343-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Potassium SerPl-sCnc = 3.5 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2343-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2823-3",
                                "display": "Potassium SerPl-sCnc"
                            }
                        ],
                        "text": "Potassium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 3.5,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 3.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 5.5,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2337-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2337-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Anion Gap3 SerPl-sCnc = 8 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2337-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "10466-1",
                                "display": "Anion Gap3 SerPl-sCnc"
                            }
                        ],
                        "text": "Anion Gap3 SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 8,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 0,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2347-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2347-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-08-01: CRP SerPl HS-mCnc = 0.4 mg/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2347-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "30522-7",
                                "display": "CRP SerPl HS-mCnc"
                            }
                        ],
                        "text": "CRP SerPl HS-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-08-01",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.4,
                        "unit": "mg/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/L"
                            },
                            "high": {
                                "value": 3,
                                "unit": "mg/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2345-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2345-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: CO2 SerPl-sCnc = 29 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2345-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2028-9",
                                "display": "CO2 SerPl-sCnc"
                            }
                        ],
                        "text": "CO2 SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 29,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 22,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 29,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2339-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2339-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Glucose SerPl-mCnc = 157 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2339-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2345-7",
                                "display": "Glucose SerPl-mCnc"
                            }
                        ],
                        "text": "Glucose SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 157,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 70,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 99,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-smokingstatus-31",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-smokingstatus-31",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Tobacco smoking status: Current every day smoker</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-31"
                        }
                    ],
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "social-history",
                                    "display": "Social History"
                                }
                            ],
                            "text": "Social History"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "72166-2",
                                "display": "Tobacco smoking status"
                            }
                        ],
                        "text": "Tobacco smoking status"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2016-02-15",
                    "performer": [
                        {
                            "reference": "Practitioner/smart-Practitioner-71614502"
                        }
                    ],
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "449868002",
                                "display": "Current every day smoker"
                            }
                        ],
                        "text": "Current every day smoker"
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2334-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2334-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Albumin/Creat Ur-mRto = 8 ug/mg{creat}</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2334-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "9318-7",
                                "display": "Albumin/Creat Ur-mRto"
                            }
                        ],
                        "text": "Albumin/Creat Ur-mRto"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 8,
                        "unit": "ug/mg{creat}",
                        "system": "http://unitsofmeasure.org",
                        "code": "ug/mg{creat}"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "ug/mg{creat}",
                                "system": "http://unitsofmeasure.org",
                                "code": "ug/mg{creat}"
                            },
                            "high": {
                                "value": 29,
                                "unit": "ug/mg{creat}",
                                "system": "http://unitsofmeasure.org",
                                "code": "ug/mg{creat}"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2328-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2328-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Bilirub SerPl-mCnc = 0.7 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2328-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1975-2",
                                "display": "Bilirub SerPl-mCnc"
                            }
                        ],
                        "text": "Bilirub SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.7,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.2,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 1.3,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2324-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2324-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: ALT SerPl-cCnc = 115 U/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2324-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1742-6",
                                "display": "ALT SerPl-cCnc"
                            }
                        ],
                        "text": "ALT SerPl-cCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 115,
                        "unit": "U/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "U/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 21,
                                "unit": "U/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "U/L"
                            },
                            "high": {
                                "value": 72,
                                "unit": "U/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "U/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2332-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2332-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Calcium SerPl-mCnc = 9.1 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2332-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "17861-6",
                                "display": "Calcium SerPl-mCnc"
                            }
                        ],
                        "text": "Calcium SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 9.1,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 8.5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 10.5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2340-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2340-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: BUN SerPl-mCnc = 15 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2340-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "3094-0",
                                "display": "BUN SerPl-mCnc"
                            }
                        ],
                        "text": "BUN SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 15,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 5,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 20,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2326-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2326-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Chloride SerPl-sCnc = 103 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2326-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2075-0",
                                "display": "Chloride SerPl-sCnc"
                            }
                        ],
                        "text": "Chloride SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 103,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 99,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 109,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2336-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2336-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: LDLc SerPl Calc-mCnc = 124 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2336-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "13457-7",
                                "display": "LDLc SerPl Calc-mCnc"
                            }
                        ],
                        "text": "LDLc SerPl Calc-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 124,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 100,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2330-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2330-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: Sodium SerPl-sCnc = 139 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2330-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2951-2",
                                "display": "Sodium SerPl-sCnc"
                            }
                        ],
                        "text": "Sodium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 139,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 136,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 145,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2342-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2342-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Cholest SerPl-mCnc = 165 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2342-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2093-3",
                                "display": "Cholest SerPl-mCnc"
                            }
                        ],
                        "text": "Cholest SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 165,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 200,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2346-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2346-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Sodium SerPl-sCnc = 136 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2346-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2951-2",
                                "display": "Sodium SerPl-sCnc"
                            }
                        ],
                        "text": "Sodium SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 136,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 135,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 145,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2338-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2338-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: PSA SerPl-mCnc = 0.331 ng/mL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2338-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2857-1",
                                "display": "PSA SerPl-mCnc"
                            }
                        ],
                        "text": "PSA SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.331,
                        "unit": "ng/mL",
                        "system": "http://unitsofmeasure.org",
                        "code": "ng/mL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "ng/mL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/mL"
                            },
                            "high": {
                                "value": 0,
                                "unit": "ng/mL",
                                "system": "http://unitsofmeasure.org",
                                "code": "ng/mL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2344-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2344-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Chloride SerPl-sCnc = 99 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2344-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2075-0",
                                "display": "Chloride SerPl-sCnc"
                            }
                        ],
                        "text": "Chloride SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 99,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 98,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 108,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2327-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2327-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: CO2 SerPl-sCnc = 30 mmol/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2327-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2028-9",
                                "display": "CO2 SerPl-sCnc"
                            }
                        ],
                        "text": "CO2 SerPl-sCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 30,
                        "unit": "mmol/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "mmol/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 20,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "high": {
                                "value": 31,
                                "unit": "mmol/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "mmol/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2335-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2335-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: HDLc SerPl-mCnc = 25 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2335-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2085-9",
                                "display": "HDLc SerPl-mCnc"
                            }
                        ],
                        "text": "HDLc SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 25,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 0,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2329-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2329-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2007-12-11: AST SerPl-cCnc = 66 U/L</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2329-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1920-8",
                                "display": "AST SerPl-cCnc"
                            }
                        ],
                        "text": "AST SerPl-cCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2007-12-11",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 66,
                        "unit": "U/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "U/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 17,
                                "unit": "U/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "U/L"
                            },
                            "high": {
                                "value": 59,
                                "unit": "U/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "U/L"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/smart-2333-lab",
                "resource": {
                    "resourceType": "Observation",
                    "id": "smart-2333-lab",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">2009-08-30: Creat SerPl-mCnc = 0.86 mg/dL</div>"
                    },
                    "identifier": [
                        {
                            "use": "official",
                            "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                            "value": "smart-2333-lab"
                        }
                    ],
                    "status": "unknown",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "Laboratory"
                                }
                            ],
                            "text": "Laboratory"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "2160-0",
                                "display": "Creat SerPl-mCnc"
                            }
                        ],
                        "text": "Creat SerPl-mCnc"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "effectiveDateTime": "2009-08-30",
                    "performer": [
                        {
                            "reference": "Practitioner/SMART-1234"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.86,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.8,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "high": {
                                "value": 1.4,
                                "unit": "mg/dL",
                                "system": "http://unitsofmeasure.org",
                                "code": "mg/dL"
                            },
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/referencerange-meaning",
                                        "code": "normal",
                                        "display": "Normal Range"
                                    }
                                ],
                                "text": "Normal Range"
                            }
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/14604",
                "resource": {
                    "resourceType": "Observation",
                    "id": "14604",
                    "meta": {
                        "versionId": "3",
                        "lastUpdated": "2021-02-10T21:43:09.000+00:00",
                        "source": "#JZRQykdvxlHxi1Gv"
                    },
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "https://loinc.org/",
                                "code": "18864-9",
                                "display": "Ampicillin"
                            }
                        ],
                        "text": "Ampicillin"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "interpretation": [
                        {
                            "coding": [
                                {
                                    "code": "R",
                                    "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation"
                                }
                            ]
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/14605",
                "resource": {
                    "resourceType": "Observation",
                    "id": "14605",
                    "meta": {
                        "versionId": "3",
                        "lastUpdated": "2021-02-10T21:43:55.000+00:00",
                        "source": "#dN0h2VjC65wmSgBi"
                    },
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "https://loinc.org/",
                                "code": "76-0",
                                "display": "Cefazolin"
                            }
                        ],
                        "text": "Cefazolin"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "valueQuantity": {
                        "value": 2,
                        "comparator": "<="
                    },
                    "interpretation": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                                    "code": "R",
                                    "display": "R"
                                }
                            ],
                            "text": "R"
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Observation/14652",
                "resource": {
                    "resourceType": "Observation",
                    "id": "14652",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2021-02-10T21:46:08.000+00:00",
                        "source": "#Jg3Zg7kEgRSEptYO"
                    },
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://acme.org/lab/codes/tests",
                                "code": "60532",
                                "display": "Doxycycline"
                            }
                        ]
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "interpretation": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.o…bservationInterpretation",
                                    "code": "S"
                                }
                            ]
                        }
                    ]
                },
                "search": {
                    "mode": "match"
                }
            }
        ]
    ]
}

export default Observation2;