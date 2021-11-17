import { INode } from '../domain/model'
export const testModel: INode[] = [
    {
        description: 'Stop. Assume transient seizure of unknown cause',
        isRootNode: false,
        name: 'radiograph-thorax-image-abdomen-normal',
        outcomes: [
            {
                label: 'Perform brain CT/MRI scan and EEG',
                name: 'perform-brain-scan'
            }
        ],
        type: 'outcome',
    },
    {
        description: 'Suspect hydrocephalus',
        isRootNode: false,
        name: 'suspect-hydrocephalus',
        outcomes: [
            {
                label: 'Go to next step',
                name: 'ultra-sound-of-brain'
            }
        ],
        type: 'outcome',
    },
    {
        description: 'Brain neoplasia',
        isRootNode: false,
        name: 'brain-neoplisia',
        outcomes: [
            {
                label: 'Perform brain CT/MRI scan and EEG',
                name: 'perform-brain-scan'
            }
        ],
        type: 'outcome',
    },
    {
        description: 'Pug dog encephalitis',
        isRootNode: false,
        name: 'pug-dog-encephalitis',
        outcomes: [
            {
                label: 'Perform brain CT/MRI scan and EEG',
                name: 'perform-brain-scan'
            }
        ],
        type: 'outcome',
    },
    {
        description: 'hydrocephalus',
        isRootNode: false,
        name: 'hydrocephalus',
        type: 'outcome',
    },
    {
        description: 'hypocalcemia, hypoglycemia, renal failure, liver disease, polycythemia, hyperlipidemia',
        isRootNode: false,
        name: 'evaluate-hemogram-chemistries-liver-abnormal',
        type: 'outcome',
    },
    {
        description: 'organophosphate intoxication, lead intoxication',
        isRootNode: false,
        name: 'check-blood-abnormal',
        type: 'outcome',
    },
    {
        description: 'Stop. Assume transient seizure of unknown cause',
        isRootNode: false,
        name: 'perform-neurological-examination-normal',
        type: 'outcome',
    },
    {
        description: 'neoplasia, systemic infection',
        isRootNode: false,
        name: 'radiograph-thorax-image-abdomen-abnormal',
        type: 'outcome',
    },
    {
        description: 'vascular disease, hydrocephalus, encephalitis, neoplasia, focal inflammations',
        isRootNode: false,
        name: 'perform-brain-scan-abnormal',
        outcomes: [
            {
                label: 'Perform CSF analisys',
                name: 'perform-csf'
            }
        ],
        type: 'outcome',
    },
    {
        description: 'inactive process, vascular disease, metabolic or toxic disease, primary epilepsy',
        isRootNode: false,
        name: 'perform-csf-normal',
        type: 'outcome',
    },
    {
        description: 'vascular disease, neoplasia, viral encephalitis, fungal encephalitis, bacterial encephalitis, parasitic encephalitis, granulomatous meningoencephalitis, pug dog encephalitis, Maltese encephalitis',
        isRootNode: false,
        name: 'perform-csf-abnormal',
        type: 'outcome',
    },
    {
        description: 'head trauma, toxin exposure, cardiac disease',
        isRootNode: false,
        name: 'home-page-positive-findings',
        outcomes: [
            {
                label: 'dome-shaped head',
                name: 'suspect-hydrocephalus'
            },
            {
                label: '9+ year old cat',
                name: 'brain-neoplisia'
            },
            {
                label: '8+ year old dog',
                name: 'brain-neoplisia'
            },
            {
                label: '1-7 year pug dog',
                name: 'pug-dog-encephalitis'
            },
            {
                label: 'toy or small-breed dog',
                name: 'evaluate-hemogram-chemistries-liver'
            }
        ],
        type: 'outcome',
    },
    {
        description: 'Ultra-sound of brain',
        isRootNode: true,
        name: 'ultra-sound-of-brain',
        outcomes: [
            {
                label: 'enlarged ventricles',
                name: 'hydrocephalus'
            },
            {
                label: 'normal',
                name: 'evaluate-hemogram-chemistries-liver'
            }
        ],
        type: 'question'
    },
    {
        description: "Evaluate, hemogram, chemistries, liver function",
        isRootNode: true,
        name: 'evaluate-hemogram-chemistries-liver',
        outcomes: [
            {
                label: 'normal results',
                name: 'check-blood'
            },
            {
                label: 'abnormal results',
                name: 'evaluate-hemogram-chemistries-liver-abnormal'
            }
        ],
        type: 'question'
    },
    {
        description: 'Check blood, lead and cholinesterase concentrations',
        isRootNode: false,
        name: 'check-blood',
        outcomes: [
            {
                label: 'normal results',
                name: 'perform-neurological-examination'
            },
            {
                label: 'abnormal results',
                name: 'check-blood-abnormal'
            }
        ],
        type: 'question',
    },
    {
        description: 'Perform neurological examination',
        isRootNode: false,
        name: 'perform-neurological-examination',
        outcomes: [
            {
                label: 'normal results',
                name: 'perform-neurological-examination-normal'
            },
            {
                label: 'abnormal results',
                name: 'radiograph-thorax-image-abdomen'
            }
        ],
        type: 'question',
    },
    {
        description: 'Radiograph, thorax, image abdomen',
        isRootNode: false,
        name: 'radiograph-thorax-image-abdomen',
        outcomes: [
            {
                label: 'normal results',
                name: 'radiograph-thorax-image-abdomen-normal'
            },
            {
                label: 'abnormal results',
                name: 'radiograph-thorax-image-abdomen-abnormal'
            }
        ],
        type: 'question',
    },
    {
        description: 'Perform brain CT/MRI scan and EEG',
        isRootNode: false,
        name: 'perform-brain-scan',
        outcomes: [
            {
                label: 'normal results',
                name: 'perform-csf'
            },
            {
                label: 'abnormal results',
                name: 'perform-brain-scan-abnormal'
            }
        ],
        type: 'question',
    },
    {
        description: 'Perform CSF analysis',
        isRootNode: false,
        name: 'perform-csf',
        outcomes: [
            {
                label: 'normal results',
                name: 'perform-csf-normal'
            },
            {
                label: 'abnormal results',
                name: 'perform-csf-abnormal'
            }
        ],
        type: 'question',
    },
]
