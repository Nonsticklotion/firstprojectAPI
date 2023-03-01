const createError = require("../utils/createError");
const {
  Case,
  CaseType,
  Cpu,
  CpuCooler,
  CpuSocket,
  Efficiency,
  GpuChipset,
  Manufacturer,
  MbChipset,
  MbFormfactor,
  Memory,
  MemoryType,
  Motherboard,
  PowerSupply,
  Product,
  Storage,
  StorageFormfactor,
  StorageType,
  VideoCard,
} = require("../models");

exports.createProduct = async (req, res, next) => {
  try {
    const {
      table,
      extend1,
      extend2,
      extend3,
      extend4,
      extend5,
      extend6,
      description,
      picture,
      amountLeft,
      price,
    } = req.body;
    switch (table) {
      case "Cpu":
        const findmanfac = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findsocket = await CpuSocket.findOne({
          where: { socketName: extend4 },
        });
        let manufacturer, socket;

        if (findmanfac) {
          manufacturer = findmanfac;
        } else {
          manufacturer = await Manufacturer.create({
            manufacName: extend3,
          });
        }

        if (findsocket) {
          socket = findsocket;
        } else {
          socket = await CpuSocket.create({ socketName: extend4 });
        }
        const cpu = await Cpu.create({
          seriesName: extend1,
          tdp: extend2,
          manufacid: manufacturer.id,
          socket_name_id: socket.id,
        });
        const product = await Product.create({
          cpu_id: cpu.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });

        res.json({
          id: cpu.id,
          seriesName: cpu.seriesName,
          tdp: cpu.tdp,
          manufacturer: {
            id: manufacturer.id,
            name: manufacturer.manufac_name,
          },
          socket: {
            id: socket.id,
            name: socket.socket_name,
          },
          product: {
            cpu_id: cpu.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "Cpucooler":
        const findmanfacCooler = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findsocketCooler = await CpuSocket.findOne({
          where: { socketName: extend4 },
        });

        let manufacturerCooler, socketCooler;

        if (findmanfacCooler) {
          manufacturerCooler = findmanfacCooler;
        } else {
          manufacturerCooler = await Manufacturer.create({
            manufacName: extend3,
          });
        }

        if (findsocketCooler) {
          socketCooler = findsocketCooler;
        } else {
          socketCooler = await CpuSocket.create({ socketName: extend4 });
        }
        const cpucooler = await CpuCooler.create({
          waterCooler: extend1,
          tdp: extend2,
          manufacid: manufacturerCooler.id,
          socket_name_id: socketCooler.id,
        });
        const productCooler = await Product.create({
          cpu_id: cpucooler.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });
        res.json({
          id: cpucooler.id,
          waterCooler: cpucooler.waterCooler,
          tdp: cpucooler.tdp,
          manufacturer: {
            id: manufacturerCooler.id,
          },
          socket: {
            id: socketCooler.id,
          },
          product: {
            cpu_cooler_id: cpucooler.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "Motherboard":
        const findmanfacMB = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findsocketMB = await CpuSocket.findOne({
          where: { socketName: extend4 },
        });
        const findMBchipset = await MbChipset.findOne({
          where: { chipsetName: extend5 },
        });
        const findMBform = await MbFormfactor.findOne({
          where: { formfactorName: extend6 },
        });
        const findMBMemorytype = await MemoryType.findOne({
          where: { memoryName: extend1 },
        });

        let manufacturerMB, socketMB, MBchipset, MBform, MBMemorytype;

        if (findmanfacMB) {
          manufacturerMB = findmanfacMB;
        } else {
          manufacturerMB = await Manufacturer.create({ manufacName: extend3 });
        }

        if (findsocketMB) {
          socketMB = findsocketMB;
        } else {
          socketMB = await CpuSocket.create({ socketName: extend4 });
        }

        if (findMBchipset) {
          MBchipset = findMBchipset;
        } else {
          MBchipset = await MbChipset.create({ chipsetName: extend5 });
        }

        if (findMBform) {
          MBform = findMBform;
        } else {
          MBform = await MbFormfactor.create({ formfactorName: extend6 });
        }

        if (findMBMemorytype) {
          MBMemorytype = findMBMemorytype;
        } else {
          MBMemorytype = await MemoryType.create({ memoryName: extend1 });
        }

        const motherboard = await Motherboard.create({
          tdp: extend2,
          manufacid: manufacturerMB.id,
          socket_name_id: socketMB.id,
          mb_chipset_id: MBchipset.id,
          mb_formfactor_id: MBform.id,
          memorytype_id: MBMemorytype.id,
        });

        const productMB = await Product.create({
          motherboard_id: motherboard.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });

        res.json({
          id: motherboard.id,
          tdp: motherboard.tdp,
          manufacturer: {
            id: manufacturerMB.id,
          },
          socket: {
            id: socketMB.id,
          },
          chipset: {
            id: MBchipset.id,
          },
          MbFormfactor: {
            id: MBform.id,
          },
          MBMemorytype: {
            id: MBMemorytype.id,
          },
          product: {
            motherboard_id: motherboard.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "VideoCard":
        const findmanfacGPU = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });

        const findGPUchipset = await GpuChipset.findOne({
          where: { chipsetName: extend1 },
        });

        let manufacturerGPU, gpuchipset;

        if (findmanfacGPU) {
          manufacturerGPU = findmanfacGPU;
        } else {
          manufacturerGPU = await Manufacturer.create({ manufacName: extend3 });
        }

        if (findGPUchipset) {
          gpuchipset = findGPUchipset;
        } else {
          gpuchipset = await GpuChipset.create({ chipsetName: extend1 });
        }

        const videocard = await VideoCard.create({
          tdp: extend2,
          manufacid: manufacturerGPU.id,
          gpu_chipset_id: gpuchipset.id,
        });

        const productGPU = await Product.create({
          videocard_id: videocard.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });
        res.json({
          id: videocard.id,
          tdp: videocard.tdp,
          manufacturer: {
            id: manufacturerGPU.id,
          },
          gpu_chipset_id: {
            id: gpuchipset.id,
          },
          product: {
            videocard_id: videocard.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "Memory":
        const findmanfacMemory = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });

        const findMemorytype = await MemoryType.findOne({
          where: { memoryName: extend1 },
        });

        let manfacMem, memorytype;

        if (findmanfacMemory) {
          manfacMem = findmanfacMemory;
        } else {
          manfacMem = await Manufacturer.create({
            manufacName: extend3,
          });
        }

        if (findMemorytype) {
          memorytype = findMemorytype;
        } else {
          memorytype = await MemoryType.create({
            memoryName: extend1,
          });
        }

        const memory = await Memory.create({
          tdp: extend2,
          manufacid: manfacMem.id,
          memorytype_id: memorytype.id,
          capacity: extend4,
          speed: extend5,
        });

        const productMEM = await Product.create({
          memory_id: memory.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });

        res.json({
          id: memory.id,
          tdp: memory.tdp,
          capacity: memory.capacity,
          speed: memory.speed,
          manufacid: {
            id: manfacMem.id,
          },
          memorytype_id: {
            id: memorytype.id,
          },
          product: {
            memory_id: memory.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "Storage":
        const findmanfacstorage = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findstoragetype = await StorageType.findOne({
          where: { storage: extend5 },
        });
        const findstorageform = await StorageFormfactor.findOne({
          where: { StorageForm: extend1 },
        });

        let manfacstorage, storagetype, storageform;

        if (findmanfacstorage) {
          manfacstorage = findmanfacstorage;
        } else {
          manfacstorage = await Manufacturer.create({
            manufacName: extend3,
          });
        }

        if (findstoragetype) {
          storagetype = findstoragetype;
        } else {
          storagetype = await StorageType.create({
            storage: extend5,
          });
        }

        if (findstorageform) {
          storageform = findstorageform;
        } else {
          storageform = await StorageFormfactor.create({
            StorageForm: extend1,
          });
        }

        const storage = await Storage.create({
          capacity: extend4,
          tdp: extend2,
          manufacid: manfacstorage.id,
          storage_type_id: storagetype.id,
          storage_formfactor_id: storageform.id,
        });

        const productstorage = await Product.create({
          storage_id: storage.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });

        res.json({
          id: storage.id,
          tdp: storage.tdp,
          capacity: storage.capacity,
          manufacturer: {
            id: manufacturerMB.id,
          },
          storagetype: {
            id: storagetype.id,
          },
          storageform: {
            id: storageform.id,
          },
          product: {
            storage_id: storage.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "Case":
        const findmanfacCase = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findMBformfac = await MbFormfactor.findOne({
          where: { formfactorName: extend6 },
        });
        const findcasetype = await CaseType.findOne({
          where: { typeName: extend5 },
        });

        let manfacCase, MBformfac, casetype;

        if (findmanfacCase) {
          manfacCase = findmanfacCase;
        } else {
          manfacCase = await Manufacturer.create({
            manufacName: extend3,
          });
        }
        if (findMBformfac) {
          MBformfac = findMBformfac;
        } else {
          MBformfac = await MbFormfactor.create({
            formfactorName: extend6,
          });
        }
        if (findcasetype) {
          casetype = findcasetype;
        } else {
          casetype = await CaseType.create({
            typeName: extend5,
          });
        }

        const casecase = await Case.create({
          powersupply: extend1,
          manufacid: manfacCase.id,
          mb_formfactor_id: MBformfac.id,
          casetype_id: casetype.id,
        });

        const productcase = await Product.create({
          case_id: casecase.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });

        res.json({
          id: casecase.id,
          powersupply: casecase.powersupply,
          manfacCase: {
            id: manfacCase.id,
          },
          mMBformfac: {
            id: MBformfac.id,
          },
          casetype: {
            id: casetype.id,
          },
          product: {
            case_id: casecase.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;

      case "PowerSupply":
       const findmanfacPS = await Manufacturer.findOne({
        where: { manufacName: extend3 },
      });
       const findefficen= await Efficiency.findOne({
        where: { efficiencyRating: extend1 },
      });

      let manfacPS, efficen

      if(findmanfacPS) {
        manfacPS = findmanfacPS
      }else {
        manfacPS = await Manufacturer.create({
          manufacName: extend3 
        })
      }
      if(findefficen){
        efficen = findefficen
      }else{
        efficen = await Efficiency.create({
          efficiencyRating: extend1
        })
      }
      
      const powersupply = await PowerSupply.create({
        wattage : extend4,
        manufacid : manfacPS.id,
        efficiency_id : efficen.id
      })

      const productPS = await Product.create({
        powesupply_id:  powersupply.id,
        description: description,
        picture: picture,
        amountLeft: amountLeft,
        price: price,
      });

      res.json({
        id : powersupply.id,
        wattage : powersupply.wattage,
        manufacturer: {
          id: manfacPS.id,
        },
        efficiency : {
          id : efficen.id
        },
        product: {
          powesupply_id: powersupply.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        },
      })
        break;
    }
  } catch (err) {
    next(err);
  }
};
