const Procedure1 = {
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": [
        [
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Procedure/14798",
                "resource": {
                    "resourceType": "Procedure",
                    "id": "14798",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2021-03-10T22:19:57.000+00:00",
                        "source": "#mvOMPgVtROvM2mdg"
                    },
                    "status": "completed",
                    "code": {
                        "coding": [
                            {
                                "system": "https://snomed.info/sct",
                                "code": "395321006",
                                "display": "Foley catheter insertion"
                            }
                        ],
                        "text": "Foley catheter insertion"
                    },
                    "subject": {
                        "reference": "Patient/14702"
                    },
                    "performedDateTime": "2021-01-01T12:59:59+06:00"
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Procedure/14799",
                "resource": {
                    "resourceType": "Procedure",
                    "id": "14799",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2021-03-10T22:20:31.000+00:00",
                        "source": "#jW9PpaSexdTUQdh8"
                    },
                    "status": "completed",
                    "code": {
                        "coding": [
                            {
                                "system": "https://snomed.info/sct",
                                "code": "395321006",
                                "display": "Foley catheter removal"
                            }
                        ],
                        "text": "Foley catheter removal"
                    },
                    "subject": {
                        "reference": "Patient/14702"
                    },
                    "performedDateTime": "2021-01-09T12:59:59+06:00"
                },
                "search": {
                    "mode": "match"
                }
            },
            {
                "fullUrl": "https://api.logicahealth.org/ubcsmartonfhir/data/Procedure/14800",
                "resource": {
                    "resourceType": "Procedure",
                    "id": "14800",
                    "meta": {
                        "versionId": "1",
                        "lastUpdated": "2021-03-10T22:21:19.000+00:00",
                        "source": "#QcxRSLU0bTmgMUrx"
                    },
                    "status": "completed",
                    "code": {
                        "coding": [
                            {
                                "system": "https://snomed.info/sct",
                                "code": "395321006",
                                "display": "Foley catheter insertion"
                            }
                        ],
                        "text": "Foley catheter insertion"
                    },
                    "subject": {
                        "reference": "Patient/14702"
                    },
                    "performedDateTime": "2021-01-09T13:59:59+06:00"
                },
                "search": {
                    "mode": "match"
                }
            }
        ]
    ]
};

export default Procedure1;