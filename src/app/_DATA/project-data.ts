import { Project } from '../_model/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: '../../assets/project_images/project_3.png',
    name: 'Dynamic Network Algorithms',
    description:
      'Network dynamics involves studying how the properties of networks change as their structure evolves. In this project we aim to develop a template for creating parallel scalable algorithms for updating different properties of large-scale dynamic networks.Our goal is to move from the current approach of case by case algorithm design to an wholistic support infrastructure for dynamic network analysis. This project is funded by NSF and is in collaboration with Dr. Sajal Das a and Dr. Boyana Norris.Another aspect of dynamic networks is to create the graph by observing temporal events. This work is in collaboration with Dr. Jeremy Wendt, Dr. Richard Field, Dr. Cynthia Phillips, and Dr. Sucheta Soundarajan',
    publicationIDs: [26, 27],
  },
  {
    id: 2,
    image: '../../assets/project_images/project_4.png',
    name: 'Modeling NonDeterminism in Exascale Applications',
    description:
      'The convergence of extremely high levels of hardware concurrency and the effective overlap of computation and communication in asynchronous executions are resulting in growing nondeterminism in High Performance Computing (HPC) applications. In this project we aim to model nondeterministic executions by determining nondeterministic motifs in executions of HPC applications and using graph theory to categorize and compare the motifs to study the impact of non-determinism. This project is funded by NSF and is in collaboration with Dr. Michela Taufer and Dr. Heike Jagode .',
      publicationIDs: [],
  },
  {
    id: 3,
    image: '../../assets/project_images/project_5.png',
    name: 'Multilayer Network Analysis',
    description:
      'Multilayer networks model systems that are related via multiple features and/or are formed of multiple types of entities. We are developing a decoupling based method for efficiently analyzing multilayer networks. Using decoupling component networks can be analyzed independently and then the analysis results can be combined to produce the final results. This work is in collaboration with Dr. Sharma Chakravarthy.',
    publicationIDs: [28, 30, 31],
  },
  {
    id: 4,
    image: '../../assets/project_images/project_1.png',
    name: 'Analyzing Noisy Networks',
    date: '2001-01-01',
    description:
      'Real world data is inherently noisy. This noise is manifested in network models in the form of additional or missing edges. In this project we study how slight changes to the network affect its properties, and explore the structure of subgraphs that are stable under noise. This work is in collaboration with Dr. Animesh Mukherjee.',
    publicationIDs: [29, 32, 34, 37],
  },
  {
    id: 5,
    image: '../../assets/project_images/project_2.png',
    name: 'Applications of Network Science',
    description:
      'Networks model the complex interactions between entities in many diverse disciplines. The properties of the networks provide insight to characteristics of the underlying complex system. We have used complex networks in many different areas including software engineering with Dr. Harvey Siy, bioinformatics with Dr. Hesham Ali and Dr. Kate Cooper, epidemiology with Dr. Armin Mikler , and narrative networks to study interactions between characters in plays.',
    publicationIDs: [35, 36, 40],
  },
  {
    id: 6,
    image: '../../assets/project_images/project_6.png',
    name: 'Perfect Graphs for Network Analysis',
    description:
      'A perfect graphs is a graph in which the chromatic number of every induced subgraph equals the size of the largest clique of that subgraph. Perfect graphs have special properties in that several NP-complete problems can be solved in polynomial time on them. Many real-world networks are also nearly perfect, such as bipartite graphs and chordal (triangulated graphs). Our goal is to leverage properties of perfect graphs to obtain faster/ more accurate network analysis results.',
    publicationIDs: [33, 38, 39],
  },
];
