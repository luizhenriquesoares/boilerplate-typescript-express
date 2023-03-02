export default interface IBaseService<TDomain> {

     findAllAsync(): Promise<TDomain>;

     findOneAsync();

     findByIdAsync(id: bigint | string): Promise<TDomain>;

     createAsync(obj: TDomain): Promise<TDomain>;

     updateAsync(obj: TDomain): Promise<TDomain>;

     deleteAsync(id: bigint): Promise<TDomain>;
}