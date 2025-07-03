// 1. IMPORT YOUR IMAGES at the top of the file
import cncHeroImage from '../assets/cnc-hero-image.jpg';  // <-- Replace with your actual filename

import laserHeroImage from '../assets/laser-hero-image.jpg';

import uvHeroImage from '../assets/uv-hero-image.jpg';

import largeFormatHeroImage from '../assets/large-format-hero-image.jpg';

import plottingHeroImage from '../assets/plotting-hero-image.jpg';

import tShirtHeroImage from '../assets/t-shirt-hero-image.jpg';


// 2. DEFINE YOUR SERVICES
export const services = 
{
    "cnc-cutting-services":{
        id: 2,
    title: "CNC Cutting Services",
    category: "Precision Fabrication",
    description: "Professional CNC cutting services for precise fabrication of various materials including wood, acrylic, metal, and foam with custom design capabilities.",
    detailedDescription: `Our CNC cutting services demonstrate precision cutting capabilities for various materials to serve clients requiring accurate fabrication and custom manufacturing solutions. Using state-of-the-art CNC technology, we deliver exceptional precision and repeatability for your projects.\n\nWhether you need prototypes, architectural elements, signage, or custom parts, our advanced CNC machines handle complex geometries with tight tolerances. From intricate decorative panels to functional components, we transform your digital designs into physical reality with unmatched accuracy.\n\nOur experienced technicians work closely with you to optimize your designs for CNC cutting, ensuring the best possible results while meeting your specifications, timeline, and budget requirements.`,
    heroImage: cncHeroImage,
    startingPrice: 800,
    turnaround: "3-5 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Precision Cutting",
      "Multiple Materials",
      "Custom Shapes",
      "CAD Compatible"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Cutting Area",
        description: "Up to 2.5m x 1.5m cutting bed with 200mm material thickness"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.1mm accuracy with smooth edge finishing"
      },
      {
        icon: "Layers",
        title: "Material Compatibility",
        description: "Wood, acrylic, metal, foam, plastic, and composite materials"
      },
      {
        icon: "Zap",
        title: "Cutting Speed",
        description: "High-speed cutting with optimized feed rates"
      },
      {
        icon: "Settings",
        title: "Tool Options",
        description: "Various cutting tools for different materials and finishes"
      },
      {
        icon: "FileText",
        title: "File Support",
        description: "CAD, DXF, DWG, and vector file format compatibility"
      }
    ],
    materials: [
      "MDF & Plywood",
      "Acrylic Sheets",
      "Aluminum Composite",
      "Foam Board",
      "PVC Sheets",
      "Polycarbonate",
      "Wood Panels",
      "Metal Sheets",
      "Corrugated Plastic",
      "Cardboard",
      "Rubber Sheets",
      "Composite Materials"
    ]
  },

  "laser-cutting":{
    id: 3,
    title: "Laser Cutting Services",
    category: "Precision Laser Technology",
    description: "Professional laser cutting services for intricate designs and detailed fabrication on various materials including wood, acrylic, leather, and fabric with precision and design complexity capabilities.",
    detailedDescription: `Our Laser Cutting Services highlight precision laser cutting technology for intricate designs and detailed fabrication to attract clients requiring high-accuracy cutting solutions. Using advanced laser technology, we deliver exceptional precision and detail for your most demanding projects.\n\nWhether you need prototypes, decorative elements, signage, or custom parts, our laser cutting machines handle the most intricate patterns and precise cuts with minimal material waste. From delicate jewelry components to architectural details, we transform your vector designs into reality with unmatched accuracy.\n\nOur experienced technicians work closely with you to optimize your designs for laser cutting, ensuring the best possible results while maintaining design integrity, meeting your timeline and budget requirements.`,
    heroImage: laserHeroImage,
    startingPrice: 600,
    turnaround: "2-3 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Intricate Patterns",
      "High Precision",
      "Multiple Materials",
      "Vector Compatible"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Cutting Area",
        description: "Up to 1.3m x 0.9m cutting bed with precision positioning"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.05mm accuracy with clean, sealed edges"
      },
      {
        icon: "Layers",
        title: "Material Range",
        description: "Wood, acrylic, leather, fabric, cardboard, and thin metals"
      },
      {
        icon: "Zap",
        title: "Laser Power",
        description: "Variable power settings for different materials and thicknesses"
      },
      {
        icon: "Settings",
        title: "Design Complexity",
        description: "Handles intricate patterns and fine details with ease"
      },
      {
        icon: "FileText",
        title: "File Formats",
        description: "Vector files: AI, SVG, DXF, PDF for optimal results"
      }
    ],
    materials: [
      "Wood & Plywood",
      "Acrylic Sheets",
      "Leather & Faux Leather",
      "Fabric & Textiles",
      "Cardboard & Paper",
      "Foam Core",
      "Rubber Sheets",
      "Thin Metal Sheets",
      "Cork Sheets",
      "Felt Material",
      "Mylar & Films",
      "Veneer Sheets"
    ]
    },

    "plotting-services": {
         id: 2,
    title: "Plotting Services",
    category: "Technical Drawing",
    description: "Professional plotting services for technical drawings, architectural plans, engineering drawings, and CAD documentation with precision and clarity.",
    detailedDescription: `Our plotting services provide high-quality technical drawing reproduction for engineering, architectural, and construction professionals. Using advanced large format plotters, we deliver crisp, accurate plots from A4 to A0 sizes.\n\nWhether you need architectural blueprints, engineering schematics, construction drawings, or CAD documentation, our plotting service ensures every line and detail is reproduced with precision. We work with various file formats and provide fast turnaround times for urgent projects.\n\nOur experienced team understands the critical nature of technical documentation and maintains strict quality control to ensure your plots meet professional standards and specifications.`,
    heroImage: plottingHeroImage,
    startingPrice: 200,
    turnaround: "Same day",
    minimumOrder: "1 sheet",
    keyFeatures: [
      "High Precision Plotting",
      "Multiple Paper Sizes",
      "CAD File Support",
      "Fast Turnaround"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Paper Sizes",
        description: "A4, A3, A2, A1, A0 plotting capabilities"
      },
      {
        icon: "Target",
        title: "Precision",
        description: "±0.1mm accuracy for technical drawings"
      },
      {
        icon: "FileText",
        title: "File Formats",
        description: "DWG, DXF, PDF, PLT, and various CAD formats"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 2400 DPI for crisp line work"
      },
      {
        icon: "Clock",
        title: "Speed",
        description: "A0 plots in under 2 minutes"
      },
      {
        icon: "Archive",
        title: "Paper Types",
        description: "Bond, vellum, film, and specialty media options"
      }
    ],
    materials: [
      "20lb Bond Paper",
      "24lb Bond Paper",
      "Vellum Paper",
      "Polyester Film",
      "Translucent Bond",
      "Photo Paper",
      "Recycled Paper",
      "Heavyweight Paper",
      "Coated Paper",
      "Archival Paper"
    ]
  },

     "large-format":{
    id: 1,
    title: "Large Format Printing",
    category: "Digital Printing",
    description: "Professional large format printing services for banners, posters, signage, and displays with vibrant colors and exceptional quality.",
    detailedDescription: `Our large format printing service delivers stunning visual impact for your marketing campaigns, events, and business signage. Using state-of-the-art digital printing technology, we produce high-resolution prints on a wide variety of materials.\n\nWhether you need indoor or outdoor applications, our weather-resistant inks and premium substrates ensure your prints maintain their vibrancy and durability. From small promotional posters to massive building wraps, we handle projects of all sizes with precision and attention to detail.\n\nOur experienced team works closely with you to optimize your designs for large format printing, ensuring the best possible results while meeting your timeline and budget requirements.`,
    heroImage: largeFormatHeroImage,
    startingPrice: 500,
    turnaround: "24-48 hours",
    minimumOrder: "1 metre",
    keyFeatures: [
      "High Resolution Printing",
      "Weather Resistant",
      "Multiple Materials",
      "Custom Sizes"
    ],
    specifications: [
      {
        icon: "Maximize",
        title: "Maximum Size",
        description: "Up to 3.2m x 50m continuous printing capability"
      },
      {
        icon: "Palette",
        title: "Color Quality",
        description: "8-color UV-resistant inks for vibrant, long-lasting prints"
      },
      {
        icon: "Layers",
        title: "Material Options",
        description: "Vinyl, canvas, fabric, paper, and specialty substrates"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 1440 DPI for crisp, detailed output"
      },
      {
        icon: "Shield",
        title: "Durability",
        description: "UV-resistant inks with 3-5 year outdoor lifespan"
      },
      {
        icon: "Settings",
        title: "Finishing Options",
        description: "Lamination, mounting, grommets, and hemming available"
      }
    ],
    materials: [
      "Vinyl Banner Material",
      "Canvas",
      "Mesh Banner",
      "Fabric",
      "Photo Paper",
      "Adhesive Vinyl",
      "Backlit Film",
      "Window Cling",
      "Magnetic Material",
      "Foam Board",
      "Corrugated Plastic",
      "Aluminum Composite"
    ]
},
    "t-shirt-printing":{
    id: 6,
    title: "T-shirt Printing Services",
    category: "Custom Apparel",
    description: "Professional custom t-shirt printing services targeting businesses, events, and personal branding needs with comprehensive printing method options and bulk pricing in KES currency.",
    detailedDescription: `Our T-shirt Printing Services showcase custom apparel printing capabilities for businesses, events, and personal branding with various printing methods and competitive bulk pricing. Using mobile-first responsive approach, we deliver high-quality custom t-shirts with vibrant designs and exceptional durability.\n\nWhether you need promotional apparel for corporate events, branded merchandise for your business, or custom designs for personal use, our comprehensive printing methods include screen printing, heat transfer, vinyl cutting, and direct-to-garment printing. Each method is carefully selected based on your design requirements, quantity, and budget.\n\nOur experienced team provides design consultation, artwork requirements guidance, and color matching capabilities to ensure your vision becomes reality. With quick turnaround times and competitive KES pricing, we make custom apparel accessible for projects of all sizes.`,
    heroImage: tShirtHeroImage,
    startingPrice: 450,
    turnaround: "3-5 days",
    minimumOrder: "10 pieces",
    keyFeatures: [
      "Multiple Printing Methods",
      "Bulk Pricing Available",
      "Custom Design Service",
      "Quick Turnaround"
    ],
    specifications: [
      {
        icon: "Palette",
        title: "Printing Methods",
        description: "Screen print, heat transfer, vinyl cutting, DTG printing"
      },
      {
        icon: "Shirt",
        title: "Garment Options",
        description: "Cotton, polyester, blends, hoodies, polo shirts, tank tops"
      },
      {
        icon: "Maximize",
        title: "Print Areas",
        description: "Front, back, sleeves, chest pocket designs available"
      },
      {
        icon: "Palette",
        title: "Color Options",
        description: "Full-color prints, spot colors, metallic, glow-in-dark"
      },
      {
        icon: "Users",
        title: "Bulk Orders",
        description: "Competitive pricing for 50+ pieces with volume discounts"
      },
      {
        icon: "Clock",
        title: "Rush Orders",
        description: "Express 24-48 hour service available for urgent needs"
      }
    ],
    materials: [
      "100% Cotton T-shirts",
      "Cotton-Polyester Blends",
      "Performance Polyester",
      "Premium Cotton",
      "Hoodies & Sweatshirts",
      "Polo Shirts",
      "Tank Tops",
      "Long Sleeve Shirts",
      "V-neck T-shirts",
      "Organic Cotton",
      "Moisture-Wicking Fabric",
      "Fashion Fit Shirts"
    ]
  },

  "uv-printing": {
    
    id: 3,
    title: "UV Printing Services",
    category: "Specialty Printing",
    description: "Advanced UV printing services for premium materials and custom applications offering exceptional durability, vibrant colors, and versatile substrate compatibility.",
    detailedDescription: `Our UV printing services showcase cutting-edge technology that delivers superior print quality on an extensive range of materials. Unlike traditional printing methods, UV printing cures ink instantly using ultraviolet light, resulting in scratch-resistant, waterproof, and fade-resistant prints.\n\nWe specialize in direct-to-substrate printing on glass, metal, wood, acrylic, ceramics, and various rigid materials. This technology opens up unlimited creative possibilities for promotional items, signage, decorative panels, and custom applications that traditional printing cannot achieve.\n\nOur UV printing process is environmentally friendly, using eco-solvent inks with no volatile organic compounds (VOCs), making it safe for indoor applications and reducing environmental impact while maintaining exceptional print quality and durability.`,
    heroImage: uvHeroImage,
    startingPrice: 800,
    turnaround: "2-3 days",
    minimumOrder: "1 piece",
    keyFeatures: [
      "Direct Material Printing",
      "Instant Curing",
      "Eco-Friendly Inks",
      "Superior Durability"
    ],
    specifications: [
      {
        icon: "Layers",
        title: "Substrate Range",
        description: "Glass, metal, wood, acrylic, ceramics, and rigid materials"
      },
      {
        icon: "Palette",
        title: "Color Gamut",
        description: "Wide color gamut with vibrant, true-to-life reproduction"
      },
      {
        icon: "Shield",
        title: "Durability",
        description: "Scratch, water, and UV resistant with long-lasting colors"
      },
      {
        icon: "Zap",
        title: "Resolution",
        description: "Up to 1200 DPI for fine detail reproduction"
      },
      {
        icon: "Leaf",
        title: "Eco-Friendly",
        description: "VOC-free inks with minimal environmental impact"
      },
      {
        icon: "Settings",
        title: "Finish Options",
        description: "Matte, gloss, textured, and special effect finishes"
      }
    ],
    materials: [
      "Tempered Glass",
      "Acrylic Sheets",
      "Aluminum Panels",
      "Wood Substrates",
      "Ceramic Tiles",
      "PVC Boards",
      "Metal Sheets",
      "Foam Board",
      "Corrugated Plastic",
      "Polycarbonate",
      "Dibond",
      "Mirror Surfaces"
    ]
  }
  
};