const MedicationRequest1 = {
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": [
        [
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-210",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-210",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">irbesartan 150 MG Oral Tablet [Avapro] (rxnorm: 153666)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "153666",
                                "display": "irbesartan 150 MG Oral Tablet [Avapro]"
                            }
                        ],
                        "text": "irbesartan 150 MG Oral Tablet [Avapro]"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2003-10-27"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-211",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-211",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">glimepiride 1 MG Oral Tablet [Amaryl] (rxnorm: 153843)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "153843",
                                "display": "glimepiride 1 MG Oral Tablet [Amaryl]"
                            }
                        ],
                        "text": "glimepiride 1 MG Oral Tablet [Amaryl]"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2003-12-10"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-216",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-216",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Hydrochlorothiazide 12.5 MG / Lisinopril 20 MG Oral Tablet (rxnorm: 197886)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "197886",
                                "display": "Hydrochlorothiazide 12.5 MG / Lisinopril 20 MG Oral Tablet"
                            }
                        ],
                        "text": "Hydrochlorothiazide 12.5 MG / Lisinopril 20 MG Oral Tablet"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2008-10-12"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-217",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-217",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Lisinopril 20 MG Oral Tablet (rxnorm: 314077)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "314077",
                                "display": "Lisinopril 20 MG Oral Tablet"
                            }
                        ],
                        "text": "Lisinopril 20 MG Oral Tablet"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2008-10-12"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-218",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-218",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Cephalexin 500 MG Oral Capsule (rxnorm: 309114)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "309114",
                                "display": "Cephalexin 500 MG Oral Capsule"
                            }
                        ],
                        "text": "Cephalexin 500 MG Oral Capsule"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 qid",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2008-11-12"
                                    },
                                    "frequency": 4,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 28,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 9,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-212",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-212",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Lisinopril 10 MG Oral Tablet (rxnorm: 314076)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "314076",
                                "display": "Lisinopril 10 MG Oral Tablet"
                            }
                        ],
                        "text": "Lisinopril 10 MG Oral Tablet"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2004-04-16"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-213",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-213",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">glimepiride 2 MG Oral Tablet [Amaryl] (rxnorm: 153591)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "153591",
                                "display": "glimepiride 2 MG Oral Tablet [Amaryl]"
                            }
                        ],
                        "text": "glimepiride 2 MG Oral Tablet [Amaryl]"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2004-04-30"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-214",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-214",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Cefaclor 500 MG Oral Capsule (rxnorm: 197449)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "197449",
                                "display": "Cefaclor 500 MG Oral Capsule"
                            }
                        ],
                        "text": "Cefaclor 500 MG Oral Capsule"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 bid",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2004-04-30"
                                    },
                                    "frequency": 2,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 60,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/MedicationRequest/smart-MedicationRequest-215",
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "smart-MedicationRequest-215",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2020-07-15T02:58:19.000+00:00",
                        "source": "#LKfj5fusAw02I92q"
                    },
                    "text": {
                        "status": "generated",
                        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">glimepiride 2 MG Oral Tablet (rxnorm: 199246)</div>"
                    },
                    "status": "active",
                    "intent": "order",
                    "medicationCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                "code": "199246",
                                "display": "glimepiride 2 MG Oral Tablet"
                            }
                        ],
                        "text": "glimepiride 2 MG Oral Tablet"
                    },
                    "subject": {
                        "reference": "Patient/smart-1869612"
                    },
                    "dosageInstruction": [
                        {
                            "text": "1 daily",
                            "timing": {
                                "repeat": {
                                    "boundsPeriod": {
                                        "start": "2005-08-01"
                                    },
                                    "frequency": 1,
                                    "period": 1,
                                    "periodUnit": "d"
                                }
                            }
                        }
                    ],
                    "dispenseRequest": {
                        "numberOfRepeatsAllowed": 1,
                        "quantity": {
                            "value": 30,
                            "unit": "{tablet}",
                            "system": "http://unitsofmeasure.org",
                            "code": "{tablet}"
                        },
                        "expectedSupplyDuration": {
                            "value": 30,
                            "unit": "days",
                            "system": "http://unitsofmeasure.org",
                            "code": "d"
                        }
                    }
                },
                "search": {
                    "mode": "match"
                }
            }
        ]
    ]
}

export default  MedicationRequest1;