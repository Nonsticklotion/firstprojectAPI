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

const deleteText = "Product deleted successfully";
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
        const findefficen = await Efficiency.findOne({
          where: { efficiencyRating: extend1 },
        });

        let manfacPS, efficen;

        if (findmanfacPS) {
          manfacPS = findmanfacPS;
        } else {
          manfacPS = await Manufacturer.create({
            manufacName: extend3,
          });
        }
        if (findefficen) {
          efficen = findefficen;
        } else {
          efficen = await Efficiency.create({
            efficiencyRating: extend1,
          });
        }

        const powersupply = await PowerSupply.create({
          wattage: extend4,
          manufacid: manfacPS.id,
          efficiency_id: efficen.id,
        });

        const productPS = await Product.create({
          powesupply_id: powersupply.id,
          description: description,
          picture: picture,
          amountLeft: amountLeft,
          price: price,
        });

        res.json({
          id: powersupply.id,
          wattage: powersupply.wattage,
          manufacturer: {
            id: manfacPS.id,
          },
          efficiency: {
            id: efficen.id,
          },
          product: {
            powesupply_id: powersupply.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          },
        });
        break;
    }
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { table, productid, amountLeft, price } = req.body;
    switch (table) {
      case "Cpu":
        const cpuproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { cpu_id: productid },
          }
        );

        const cpuupdatedProduct = await Product.findOne({
          where: { cpu_id: productid },
        });

        res.json({
          id: cpuupdatedProduct.id,
          cpu_id: cpuupdatedProduct.cpu_id,
          description: cpuupdatedProduct.description,
          picture: cpuupdatedProduct.picture,
          amountLeft: cpuupdatedProduct.amountLeft,
          price: cpuupdatedProduct.price,
        });
        break;

      case "Cpucooler":
        const cpucoolerproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { cpu_cooler_id: productid },
          }
        );

        const cpucoolerupdatedProduct = await Product.findOne({
          where: { cpu_cooler_id: productid },
        });

        res.json({
          id: cpucoolerupdatedProduct.id,
          cpu_cooler_id: cpucoolerupdatedProduct.cpu_cooler_id,
          description: cpucoolerupdatedProduct.description,
          picture: cpucoolerupdatedProduct.picture,
          amountLeft: cpucoolerupdatedProduct.amountLeft,
          price: cpucoolerupdatedProduct.price,
        });

        break;

      case "Motherboard":
        const motherboardproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { motherboard_id: productid },
          }
        );

        const motherboardupdatedProduct = await Product.findOne({
          where: { motherboard_id: productid },
        });

        res.json({
          id: motherboardupdatedProduct.id,
          motherboard_id: motherboardupdatedProduct.motherboard_id,
          description: motherboardupdatedProduct.description,
          picture: motherboardupdatedProduct.picture,
          amountLeft: motherboardupdatedProduct.amountLeft,
          price: motherboardupdatedProduct.price,
        });

        break;

      case "VideoCard":
        const gpuproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { videocard_id: productid },
          }
        );

        const gpuupdatedProduct = await Product.findOne({
          where: { videocard_id: productid },
        });

        res.json({
          id: gpuupdatedProduct.id,
          videocard_id: gpuupdatedProduct.videocard_id,
          description: gpuupdatedProduct.description,
          picture: gpuupdatedProduct.picture,
          amountLeft: gpuupdatedProduct.amountLeft,
          price: gpuupdatedProduct.price,
        });

        break;

      case "Memory":
        const memproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { memory_id: productid },
          }
        );

        const memupdatedProduct = await Product.findOne({
          where: { memory_id: productid },
        });

        res.json({
          id: memupdatedProduct.id,
          memory_id: memupdatedProduct.memory_id,
          description: memupdatedProduct.description,
          picture: memupdatedProduct.picture,
          amountLeft: memupdatedProduct.amountLeft,
          price: memupdatedProduct.price,
        });

        break;

      case "Storage":
        const storageproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { storage_id: productid },
          }
        );

        const storageupdatedProduct = await Product.findOne({
          where: { storage_id: productid },
        });

        res.json({
          id: storageupdatedProduct.id,
          storage_id: storageupdatedProduct.storage_id,
          description: storageupdatedProduct.description,
          picture: storageupdatedProduct.picture,
          amountLeft: storageupdatedProduct.amountLeft,
          price: storageupdatedProduct.price,
        });

        break;

      case "Case":
        const caseproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { case_id: productid },
          }
        );

        const caseupdatedProduct = await Product.findOne({
          where: { case_id: productid },
        });

        res.json({
          id: caseupdatedProduct.id,
          case_id: caseupdatedProduct.case_id,
          description: caseupdatedProduct.description,
          picture: caseupdatedProduct.picture,
          amountLeft: caseupdatedProduct.amountLeft,
          price: caseupdatedProduct.price,
        });

        break;

      case "PowerSupply":
        const PSproduct = await Product.update(
          {
            amountLeft: amountLeft,
            price: price,
          },
          {
            where: { powersupply_id: productid },
          }
        );

        const PSupdatedProduct = await Product.findOne({
          where: { powersupply_id: productid },
        });

        res.json({
          id: PSupdatedProduct.id,
          powersupply_id: PSupdatedProduct.powersupply_id,
          description: PSupdatedProduct.description,
          picture: PSupdatedProduct.picture,
          amountLeft: PSupdatedProduct.amountLeft,
          price: PSupdatedProduct.price,
        });

        break;
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { table, productid } = req.body;
    switch (table) {
      case "Cpu":
        await Product.destroy({
          where: { cpu_id: productid },
        });
        await Cpu.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "Cpucooler":
        await Product.destroy({
          where: { cpu_cooler_id: productid },
        });
        await CpuCooler.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "Motherboard":
        await Product.destroy({
          where: { motherboard_id: productid },
        });
        await Motherboard.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "VideoCard":
        await Product.destroy({
          where: { videocard_id: productid },
        });
        await VideoCard.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "Memory":
        await Product.destroy({
          where: { memory_id: productid },
        });
        await Memory.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "Storage":
        await Product.destroy({
          where: { storage_id: productid },
        });
        await Storage.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "Case":
        await Product.destroy({
          where: { case_id: productid },
        });
        await Case.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;

      case "PowerSupply":
        await Product.destroy({
          where: { powersupply_id: productid },
        });
        await PowerSupply.destroy({
          where: { id: productid },
        });
        res.json({ message: deleteText });
        break;
    }
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
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
      sort,
      price,
    } = req.body;

    switch (table) {
      case "Cpu":
        const manfacCpu = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findSocketName = await CpuSocket.findOne({
          where: { socketName: extend4 },
        });
        const findCpu = await Cpu.findAll({
          where: {
            seriesName: extend1 || null,
            manufacid: manfacCpu.id || null,
            socket_name_id: findSocketName.id || null,
          },
        });

        const cpuIds = findCpu.map((cpu) => cpu.id);

        const findCpuProduct = await Product.findAll({
          where: {
            cpu_id: cpuIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responseCpu = findCpu.map((cpu) => ({
          id: cpu.id,
          seriesName: cpu.seriesName,
          tdp: cpu.tdp,
          manufacturer: {
            id: manfacCpu.id,
            name: manfacCpu.manufacName,
          },
          socket: {
            id: findSocketName.id,
            name: findSocketName.socketName,
          },
          product: findCpuProduct.find((x) => x.cpu_id === cpu.id),
        }));

        res.json(responseCpu);
        break;

      case "CpuCooler":
        const manfacCpuCooler = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findSocketNameCooler = await CpuSocket.findOne({
          where: { seriesName: extend4 },
        });
        const findCpuCooler = await CpuCooler.findAll({
          where: {
            waterCooler: extend1 || null,
            manufacid: manfacCpu.id || null,
            socket_name_id: findSocketName.id || null,
          },
        });

        const CpuCoolerIds = findCpuCooler.map((x) => x.id);

        const findCpuCoolerProduct = await Product.findAll({
          where: {
            cpu_cooler_id: CpuCoolerIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responseCpuCooler = findCpuCooler.map((x) => ({
          id: x.id,
          socketName: x.socketName,
          tdp: x.tdp,
          manufacturer: {
            id: manfacCpuCooler.id,
            name: manfacCpuCooler.manufacName,
          },
          socket: {
            id: findSocketNameCooler.id,
            socketName: findSocketNameCooler.socketName,
          },
          product: findCpuCoolerProduct.find((x) => x.cpu_cooler_id === x.id),
        }));
        res.json(responseCpuCooler);
        break;

      case "Motherboard":
        const manfacMotherboard = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findSocketNameMB = await CpuSocket.findOne({
          where: { socketName: extend4 },
        });
        const findMBmemorytype = await MemoryType.findOne({
          where: { memoryName: extend1 },
        });
        const findMBChipset = await MbChipset.findOne({
          where: { chipsetName: extend5 },
        });
        const findMbformfactor = await MbFormfactor.findOne({
          where: { formfactorName: extend6 },
        });

        const findMB = await Motherboard.findAll({
          where: {
            manufacid: manfacMotherboard.id || null,
            socket_name_id: findSocketNameMB.id || null,
            mb_chipset_id: findMBChipset.id || null,
            mb_formfactor_id: findMbformfactor.id || null,
            memorytype_id: findMBmemorytype.id || null,
          },
        });

        const MBIds = findMB.map((x) => x.id);

        const findMBProduct = await Product.findAll({
          where: {
            motherboard_id: MBIds,
            order: [["price", sort === "asc" ? "ASC" : "DESC"]],
          },
        });

        const responseMB = findMB.map((x) => ({
          id: x.id,
          tdp: x.tdp,
          manufacturer: {
            id: manfacMotherboard.id,
            manufacName: manfacMotherboard.manufacName,
          },
          socket: {
            id: findSocketNameMB.id,
            name: findSocketNameMB.socketName,
          },
          MbChipset: {
            id: findMBChipset.id,
            name: findMBChipset.chipsetName,
          },
          MbFormfactor: {
            id: findMbformfactor.id,
            name: findMbformfactor.formfactorName,
          },
          Memorytype: {
            id: findMBmemorytype.id,
            name: findMBmemorytype.memoryName,
          },
          product: findMBProduct.find((x) => x.videocard_id === x.id),
        }));
        res.json(responseMB);
        break;

      case "VideoCard":
        const manfacGpu = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findGpuChipset = await GpuChipset.findOne({
          where: { chipsetName: extend1 },
        });
        const findGpu = await VideoCard.findAll({
          where: {
            manufacid: manfacGpu.id || null,
            gpu_chipset_id: findGpuChipset.id || null,
          },
        });

        const gpuIds = findGpu.map((x) => x.id);

        const findGpuProduct = await Product.findAll({
          where: {
            videocard_id: gpuIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responseGpu = findGpu.map((x) => ({
          id: x.id,
          tdp: x.tdp,
          manufacturer: {
            id: manfacMotherboard.id,
            manufacName: manfacMotherboard.manufacName,
          },
          gpuchipset: {
            id: findGpuChipset.id,
            name: findGpuChipset.chipsetName,
          },
          product: findGpuProduct.find((x) => x.videocard_id === x.id),
        }));
        res.json(responseGpu);
        break;

      case "Memory":
        const manfacMem = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findmemorytype = await MemoryType.findOne({
          where: { memoryName: extend1 },
        });
        const findMemory = await Memory.findAll({
          where: {
            capacity: extend4 || null,
            speed: extend5 || null,
            manufacid: manfacMem.id || null,
            memorytype_id: findmemorytype.id || null,
          },
        });

        const memoryIds = findMemory.map((x) => x.id);

        const findMemoryProduct = await Product.findAll({
          where: {
            memory_id: memoryIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responseMemory = findMemory.map((x) => ({
          id: x.id,
          capacity: x.capacity,
          speed: x.speed,
          tdp: x.tdp,
          manufacturer: {
            id: manfacMem.id,
            name: manfacMem.manufacName,
          },
          memorytype: {
            id: findmemorytype.id,
            name: findmemorytype.memoryName,
          },
          product: findMemoryProduct.find((x) => x.memorytype_id === x.id),
        }));

        res.json(responseMemory);
        break;

      case "Storage":
        const manfacStorage = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findStoragetype = await StorageType.findOne({
          where: { storage: extend5 },
        });
        const findStorageForm = await StorageFormfactor.findOne({
          where: { StorageForm: extend1 },
        });

        const findStorage = await Storage.findAll({
          where: {
            capacity: extend4 || null,
            manufacid: manfacStorage.id || null,
            storage_type_id: findStoragetype.id || null,
            storage_formfactor_id: findStorageForm.id || null,
          },
        });

        const storageIds = findStorage.map((x) => x.id);

        const findStorageProduct = await Product.findAll({
          where: {
            storage_id: storageIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responseStorage = findStorage.map((x) => ({
          id: x.id,
          capacity: x.capacity,
          tdp: x.tdp,
          manufacturer: {
            id: manfacStorage.id,
            name: manfacStorage.manufacName,
          },
          storagetype: {
            id: findStoragetype.id,
            name: findStoragetype.storage,
          },
          storageformfactor: {
            id: findStorageForm.id,
            name: findStorageForm.StorageForm,
          },
          product: findStorageProduct.find(
            (x) => x.storage_formfactor_id === x.id
          ),
        }));

        res.json(responseStorage);
        break;

      case "Case":
        const manfacCase = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findCaseMBForm = await MbFormfactor.findOne({
          where: { formfactorName: extend6 },
        });
        const findCaseType = await CaseType.findOne({
          where: { typeName: extend5 },
        });

        const findCase = await Case.findAll({
          where: {
            manufacid: manfacCase.id || null,
            mb_formfactor_id: findCaseMBForm.id || null,
            casetype_id: findCaseType.id || null,
          },
        });

        const caseIds = findCase.map((x) => x.id);

        const findCaseProduct = await Product.findAll({
          where: {
            case_id: caseIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responseCase = findCase.map((x) => ({
          id: x.id,
          powersupply: x.powersupply,
          manufacturer: {
            id: manfacCase.id,
            name: manfacCase.manufacName,
          },
          mbFormfactor: {
            id: findCaseMBForm.id,
            name: findCaseMBForm.formfactorName,
          },
          caseType: {
            id: findCaseType.id,
            name: findCaseType.typeName,
          },
          product: findCaseProduct.find((x) => x.case_id === x.id),
        }));

        res.json(responseCase);
        break;

      case "PowerSupply":
        const manfacPS = await Manufacturer.findOne({
          where: { manufacName: extend3 },
        });
        const findefficency = await Efficiency.findOne({
          where: {
            efficiencyRating: extend1,
          },
        });

        const findPowerSupply = await PowerSupply.findAll({
          where: {
            wattage: extend4 || null,
            manufacid: manfacPS.id || null,
            efficiency_id: findefficency.id || null,
          },
        });

        const powersupplyIds = findPowerSupply.map((x) => x.id);

        const findPowerSupplyProduct = await Product.findAll({
          where: {
            powesupply_id: powersupplyIds,
            order: [
              ["price", sort === "asc" ? "ASC" : "DESC"],
              ["id", "ASC"],
            ],
          },
        });

        const responsePowerSupply = findPowerSupply.map((x) => ({
          id: x.id,
          wattage: x.wattage,
          manufacturer: {
            id: manfacPS.id,
            name: manfacPS.manufacName,
          },
          efficiency: {
            id: findefficency.id,
            name: findefficency.efficiencyRating,
          },
          product: findPowerSupplyProduct.find((x) => x.efficiency_id === x.id),
        }));
        res.json(responsePowerSupply);
        break;
    }
  } catch (err) {
    next(err);
  }
};

exports.orderManage = async (req, res, next) => {
  try{
  
  }catch(err){
    next(err)
  }
};

