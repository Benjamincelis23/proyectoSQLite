import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { DatabaseService } from './database.service';
import { Storage } from '@ionic/storage-angular';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let storageSpy: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Storage', ['create', 'set', 'get', 'remove', 'clear']);
    
    TestBed.configureTestingModule({
      providers: [
        DatabaseService,
        { provide: Storage, useValue: spy }  // Proporcionar el mock de Storage
      ]
    });

    service = TestBed.inject(DatabaseService);
    storageSpy = TestBed.inject(Storage) as jasmine.SpyObj<Storage>;

    // Simula la inicialización del storage
    storageSpy.create.and.returnValue(Promise.resolve(spy));
=======

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
<<<<<<< HEAD

  it('should set and get an item', async () => {
    storageSpy.set.and.returnValue(Promise.resolve());
    storageSpy.get.and.returnValue(Promise.resolve('testValue'));

    await service.setItem('testKey', 'testValue');
    const value = await service.getItem('testKey');

    expect(storageSpy.set).toHaveBeenCalledWith('testKey', 'testValue');
    expect(value).toBe('testValue');
  });

  it('should remove an item', async () => {
    storageSpy.remove.and.returnValue(Promise.resolve());

    await service.removeItem('testKey');
    expect(storageSpy.remove).toHaveBeenCalledWith('testKey');
  });

  it('should clear all items', async () => {
    storageSpy.clear.and.returnValue(Promise.resolve());

    await service.clear();
    expect(storageSpy.clear).toHaveBeenCalled();
  });
=======
>>>>>>> 921f1a61ed3b6398c0876b97587b8418676c0c10
});
