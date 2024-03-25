const nodeData = [
    {
        "id": 1,
        "Overview": "Car manufacturing, also known as automotive manufacturing, is the process of producing automobiles on a large scale, typically in dedicated factories or assembly plants. It involves a series of complex and interconnected steps, starting from the design and engineering of vehicles to their assembly and final inspection. Car manufacturing is a crucial industry that plays a significant role in the global economy, providing employment opportunities, driving innovation, and meeting the transportation needs of societies worldwide.",

        "Functionality": "Car manufacturing begins with the design and development phase, where automotive engineers and designers conceptualize new vehicle models. This phase involves extensive research, prototyping, and testing to ensure that the vehicle meets safety, performance, and regulatory standards."
    },
    {
        "id": 2,
        "Overview": "Research is the foundation upon which informed decisions are made. It involves gathering, analyzing, and interpreting data to gain insights into market trends, consumer behavior, competitor strategies, and industry innovations.",

        "Functionality": "Here, you'll delve into market research methodologies, data collection techniques, qualitative and quantitative analysis, trend forecasting, and competitive intelligence"
    },
    {
        "id": 3,
        "Overview": "Planning is the strategic process of setting goals, outlining objectives, and developing actionable strategies to achieve them. It involves assessing resources, identifying risks, and creating roadmaps for success.",


        "Functionality": "In this node, you'll explore strategic planning frameworks, project management methodologies, goal-setting techniques, risk assessment strategies, and business continuity planning."
    },
    {
        "id": 4,
        "Overview": "Designing encompasses the creative process of conceptualizing, visualizing, and prototyping solutions to meet specific needs or solve problems. It involves a blend of artistic expression, user experience considerations, and technical expertise.",

        "Functionality": "Within this node, you'll find discussions on graphic design principles, user interface (UI) and user experience (UX) design, prototyping tools, wireframing techniques, and design thinking methodologies."
    },
    {
        "id": 5,
        "Overview": "Manufacturing involves the transformation of raw materials or components into finished products through various processes, techniques, and technologies. It encompasses everything from production planning and assembly to quality control and supply chain management.",

        "Functionality": "Here, you'll explore manufacturing processes, lean manufacturing principles, quality management systems (QMS), supply chain optimization, inventory management, and sustainability practices."
    },
    {
        "id": 6,
        "Overview": "Sales and marketing are essential functions aimed at promoting products or services, attracting customers, and generating revenue. It involves understanding customer needs, creating compelling messages, and implementing effective sales strategies.",

        "Functionality": "Within this node, you'll find discussions on marketing mix strategies (product, price, place, promotion), customer segmentation, target market analysis, sales funnels, lead generation tactics, and customer relationship management (CRM)."
    },
    {
        "id": 7,
        "Overview": "External factors encompass elements outside the organization's control that can impact its operations, performance, and success. It includes market dynamics, industry trends, regulatory environments, competitor actions, and economic conditions.",

        "Functionality": " Here, you'll explore analyses of market trends, competitor assessments, industry benchmarks, regulatory compliance requirements, geopolitical risks, and global economic outlooks."
    },
    {
        "id": 8,
        "Overview": " Internal factors refer to elements within the organization's sphere of influence that can affect its operations, culture, and performance. It includes organizational structure, leadership styles, employee morale, and operational processes.",

        "Functionality": "Within this node, you'll find discussions on organizational structure design, leadership development programs, employee engagement strategies, performance management systems, and internal communication channels."
    },
    {
        "id": 9,
        "Overview": "The Product Requirements Document (PRD) outlines the functional and non-functional specifications, features, and expectations for a product. It serves as a blueprint for product development teams, guiding the creation and refinement of products.",

        "Functionality": " Here, you'll explore the components of a PRD, including product objectives, user stories, feature prioritization, technical specifications, acceptance criteria, and version control processes."
    },
    {
        "id": 10,
        "Overview": "Specifications detail the technical requirements, attributes, and characteristics of a product or system. They provide clear guidelines for design, development, manufacturing, and quality assurance processes.",

        "Functionality": "Within this node, you'll find discussions on product specifications, including dimensions, materials, performance metrics, tolerance levels, compliance standards, and certification requirements."
    },
    {
        "id": 11,
        "Overview": "Hardware refers to the physical components of a product or system, including electronic devices, mechanical parts, and structural elements. It encompasses the design, manufacturing, testing, and integration of hardware components.",

        "Functionality": "Here, you'll explore hardware development processes, component selection criteria, circuit design techniques, prototyping methods, testing procedures, and hardware debugging strategies."
    },
    {
        "id": 12,
        "Overview": "Software encompasses the programs, applications, and systems used to operate devices, perform tasks, and deliver services. It includes everything from operating systems and utilities to business applications and mobile apps.",

        "Functionality": "Within this node, you'll find discussions on software development methodologies, programming languages, software architecture patterns, database design principles, debugging techniques, and software testing strategies."
    },
    {
        "id": 13,
        "Overview": "Materials are substances used in the manufacturing or construction of products. They include metals, plastics, ceramics, composites, and natural materials. Material selection plays a crucial role in product performance, durability, and cost-effectiveness.",

        "Functionality": "Here, you'll explore material properties, characteristics, and applications across various industries. Topics include material testing methods, material sourcing strategies, sustainability considerations, and material recycling initiatives."
    },
    {
        "id": 14,
        "Overview": "Production involves the process of creating goods or services through manufacturing, assembly, or processing activities. It includes planning, scheduling, executing, and monitoring production operations to meet demand and quality standards.",

        "Functionality": "Within this node, you'll find discussions on production planning techniques, production scheduling algorithms, capacity planning models, inventory control systems, and production efficiency metrics.",
    },
    {
        "id": 15,
        "Overview": "In the digital era, the online sphere has become a pivotal arena for businesses to thrive. It encompasses a broad spectrum of activities ranging from establishing a robust web presence to implementing effective digital marketing strategies. Leveraging the power of the internet, businesses can engage with their target audience, showcase their products or services, and drive conversions through various online channels.",

        "Functionality": "Within the realm of online operations, businesses focus on website development, search engine optimization (SEO), social media marketing, content creation, email marketing, pay-per-click (PPC) advertising, and online reputation management. Through these efforts, organizations aim to enhance brand visibility, attract potential customers, and foster meaningful relationships in the digital landscape."
    },
    {
        "id": 16,
        "Overview": "Dealerships are retail outlets or distribution channels authorized to sell products on behalf of manufacturers or suppliers. They play a crucial role in reaching customers, promoting products, and providing after-sales support.",

        "Functionality": "Here, you'll explore dealership management practices, dealer network strategies, channel partner relationships, sales incentive programs, and dealership performance metrics."
    },
    {
        "id": 17,
        "Overview": " Business-to-Consumer (B2C) refers to transactions between businesses and individual consumers. It involves marketing, selling, and delivering products or services directly to end-users through various channels, including retail stores, e-commerce websites, and mobile apps.",

        "Functionality": "Within this node, you'll find discussions on B2C marketing strategies, customer acquisition tactics, online retailing platforms, customer experience optimization, and consumer behavior analysis."
    },
    {
        "id": 18,
        "Overview": " Business-to-Consumer (B2C) refers to transactions between businesses and individual consumers. It involves marketing, selling, and delivering products or services directly to end-users through various channels, including retail stores, e-commerce websites, and mobile apps.",

        "Functionality": "Within this node, you'll find discussions on B2C marketing strategies, customer acquisition tactics, online retailing platforms, customer experience optimization, and consumer behavior analysis."
    },
    {
        "id": 19,
        "Overview": "In the digital era, the online sphere has become a pivotal arena for businesses to thrive. It encompasses a broad spectrum of activities ranging from establishing a robust web presence to implementing effective digital marketing strategies. Leveraging the power of the internet, businesses can engage with their target audience, showcase their products or services, and drive conversions through various online channels.",

        "Functionality": "Within the realm of online operations, businesses focus on website development, search engine optimization (SEO), social media marketing, content creation, email marketing, pay-per-click (PPC) advertising, and online reputation management. Through these efforts, organizations aim to enhance brand visibility, attract potential customers, and foster meaningful relationships in the digital landscape."
    },
    {
        "id": 20,
        "Overview": "Interviews serve as invaluable tools for gathering qualitative insights, opinions, and perspectives from individuals or groups. Whether conducted for market research, customer feedback, employee evaluations, or expert consultations, interviews provide a platform for in-depth discussions and information exchange.",

        "Functionality": " Interviews may take various forms such as structured interviews, semi-structured interviews, focus group discussions, or one-on-one interviews. Researchers or interviewers employ effective questioning techniques to elicit valuable responses, probe into specific areas of interest, and uncover nuanced viewpoints. The data gathered through interviews offers rich qualitative data that can inform decision-making processes and drive organizational strategies."
    },
    {
        "id": 21,
        "Overview": "Public data refers to information that is openly available and accessible to the general public. It encompasses a wide range of datasets, statistics, reports, and publications collected and disseminated by government agencies, research institutions, and other organizations.",

        "Functionality": "Public data serves as a valuable resource for conducting research, analysis, and policymaking across various domains. Researchers, analysts, policymakers, and businesses can leverage public data to gain insights into demographic trends, socioeconomic indicators, market dynamics, health statistics, environmental factors, and more. By tapping into publicly available datasets, stakeholders can make informed decisions, identify emerging trends, and address societal challenges."
    },
    {
        "id": 22,
        "Overview": " Health is a multidimensional concept encompassing physical, mental, and social well-being. It is influenced by various factors including genetics, lifestyle choices, environmental conditions, access to healthcare services, and social determinants of health.",

        "Functionality": "Within the realm of health, stakeholders work towards promoting wellness, preventing diseases, and improving healthcare outcomes. This involves efforts such as healthcare delivery, medical research, public health initiatives, health education, disease surveillance, and healthcare policy development. By addressing health-related challenges and disparities, stakeholders aim to enhance the quality of life and achieve better health outcomes for individuals and communities."
    },

]

export default nodeData;